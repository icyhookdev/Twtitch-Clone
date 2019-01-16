# Twtitch-Clone
Setup channels to make live broadcast. Using React-Redux

# Usage
1 - clone the repo.
2 - Open the console and make cd to repo dir.
3 - add two tabs in the console with the same repo dir. 3 tabs in total.
4 - cd to api folder and type `npm i` && `npm start` ---> initializing the Json server
5 - cd to client folder and type `npm i` && `npm start` ---> initializing the React server
6 - cd to rtmp folder and type `npm i` && `npm start` ---> initializing the video stream incoming request

# OBS Setup 
Settings -> Stream

 `Stream Type : Custom Streaming Server`
 `URL : rtmp://localhost/live`
 `Stream key : this will be the ID that shows up on the URL` `ex: http://localhost:3000/stream/3`
