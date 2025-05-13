{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric #-}

module Main where

import Network.Wai
import Network.Wai.Handler.Warp (run)
import Network.HTTP.Types (status200, status404)
import qualified Data.ByteString.Lazy as BL
import Data.Aeson (decode, encode, eitherDecode, FromJSON, ToJSON)
import Data.Time.Clock (getCurrentTime)
import Data.Time.Format (formatTime, defaultTimeLocale)
import qualified Data.Text.Lazy as TL
import qualified Data.Text.Lazy.Encoding as TLE
import GHC.Generics (Generic)

main :: IO ()
main = do
    putStrLn "Starting Haskell backend server on http://localhost:3001"
    run 3001 app

app :: Application
app req respond =
    case (requestMethod req, pathInfo req) of
        ("POST", ["api", "resume"]) -> do
            body <- strictRequestBody req
            case eitherDecode body :: Either String ResumeData of
                Left err ->
                    let errorBody = TLE.encodeUtf8 $ TL.pack $ "Invalid JSON: " ++ err
                    in respond $ responseLBS status404 [("Content-Type", "text/plain")] errorBody
                Right resume -> do
                    saveResume resume
                    respond $ responseLBS status200 [("Content-Type", "application/json")] (encode resume)
        ("GET", ["health"]) ->
            respond $ responseLBS status200 [("Content-Type", "text/plain")] "Backend is running."
        _ ->
            respond $ responseLBS status404 [("Content-Type", "text/plain")] "Not Found"

-- | Resume data type
data ResumeData = ResumeData
    { name       :: String
    , email      :: String
    , phone      :: String
    , education  :: String
    , skills     :: String
    , experience :: String
    } deriving (Show, Generic)

instance FromJSON ResumeData
instance ToJSON ResumeData

-- Save to file with timestamp
saveResume :: ResumeData -> IO ()
saveResume resume = do
    currentTime <- getCurrentTime
    let fileName = "resume_" ++ formatTime defaultTimeLocale "%Y%m%d%H%M%S" currentTime ++ ".json"
    BL.writeFile fileName (encode resume)
