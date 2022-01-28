# Sync Video Player

This is made to synchronise the video player(Only for youtube) with your friends. So than you can watch the same video exactly at the same time

# Extension

❌ : The extension is not available on the chrome store. <br/>

## Download ⬇️
Download the zip and extract it. Then go to **chrome://extensions/**, activate the dev mode and choose **Load unpacked extension**.

## Config ⚙️

You need to edit the line **26** in the **content.js** file and change the url to your own socket io server. Check the **Server** chapter for a better understanding.

## Use 👍

If you want to play a video with your friends. Just send them the and tell them to click on the button 🔄(Sync Video Player).<br/>To play the video you just need to press the button ▶️(Play/Pause video). **Only one person** need to press the play button.

# Server

## Download ⬇️
```sh
git clone https://github.com/YungBricoCoop/Sync-Video-Player
cd Sync-Video-Player
npm install
```

## Config ⚙️
⚠️ : To run the server you will **need** a ssl secured server. Check this [link](https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca) (For Linux) if you want to install a **free** one. When it's done change line **10,11,12** in **server.js** with your certificate files path.<br/>

⚠️ : Be sure to open the port your Node server is listening on.



## Run 👍

```sh
npm start
```
### Console
```sh
> server@1.0.0 start
> nodemon server.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Client[BTE6VwQDvFn6wwmIAAAB] Joined Room[bb85580dae02fab79f828b1127130bd0]
Client[Z9Ahnjs6WUGZrrFdAAAD] Joined Room[bb85580dae02fab79f828b1127130bd0]
Client[Z9Ahnjs6WUGZrrFdAAAD] Played/Paused Room[bb85580dae02fab79f828b1127130bd0] Timestamp[21.27294]
```