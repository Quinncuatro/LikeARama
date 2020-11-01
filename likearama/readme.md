# LikeARama
Spotify App 
[My Dashboard | Spotify for Developers](https://developer.spotify.com/dashboard/applications/d93112f3e15349689f052a0b0a1376c9)
Client ID d93112f3e15349689f052a0b0a1376c9 
Client Secret adbcd826b1de4150983260c05f3f690d

https://developer.spotify.com/documentation/web-api/quick-start/

JS Library
[GitHub - thelinmichael/spotify-web-api-node: A Node.js wrapper for Spotify’s Web API.](https://github.com/thelinmichael/spotify-web-api-node)

API Scopes ([Authorization Scopes | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/scopes/))
+ user-read-currently-playing
	Get the user’s currently playing track
	[Authorization Scopes | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/scopes/#user-read-currently-playing)
- user-library-modify
	Save tracks for user
	[Authorization Scopes | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/scopes/#user-library-modify)

 GET THE CURRENTLY PLAYING TRACK
[Get the User’s Currently Playing Track | Spotify for Developers](https://developer.spotify.com/console/get-users-currently-playing-track/?market=US&additional_types=)
We need an oath token and the market (US)
	- Eventually make this a dropdown option in settings
We need the song ID
--> Object.item.id

>   GET https://api.spotify.com/v1/me/player/currently-playing

> curl -X “GET” “https://api.spotify.com/v1/me/player/currently-playing?market=US” -H “Accept: application/json” -H “Content-Type: application/json” -H “Authorization: Bearer BQC5ZqK_a63y3t-gZOSP-QkmVDQmF0CVd7ZPABvc10X5xo8YyBr7xIlohtzqIYF46ul7lf5WmIjyxRU6hDpxD_PvizuU8CC2v9_V9mQwXw2lFA5V9iYXj73YMsJ5I-Yjaxi-lXpIMh1wIJLWAZBMU5BdYgDYY7P2RiS-FY4mpwEwiw”

SAVE THE TRACK FOR CURRENT USER
We just need the ID from the last GET

>  PUT https://api.spotify.com/v1/me/tracks

> curl -X “PUT” “https://api.spotify.com/v1/me/tracks?ids=6UIxGIqWlO5wsddY44AV1R” -H “Accept: application/json” -H “Content-Type: application/json” -H “Authorization: Bearer BQC4JzvLBmOrgA21w-g9EgSTWZOcOw0Hgio92z1jFoyKYGY7BwB31VU4Da0vEniA6dt8rgt28ilApHX4-fv74km1V7pVPnHnQeW8e8zQj_k7_En3cnfPter35MvGvqnDi3jfU3Cwd4LVcQs2kP14udrC5gVqxe9uDYZCbC4VemNY8w”

---

# Markdown Editor Project
## The Build
---
### Features
-  Live 

### Libraries
* React-CodeMirror2
	* [react-codemirror2  -  npm](https://www.npmjs.com/package/react-codemirror2)

## Notes
---
### Markdown Editors to Steal From:
* Bear
* [GitHub - ExamProCo/fast-author: Improve productivity when creating written articles specific for tech tutorials involving lots of screenshots.](https://github.com/ExamProCo/fast-author#How-to-run-the-application-in-development)
* Mark Text
* Markdownify
* Typora
* Mook

### Markdown Editor Tutorials
* https://www.freecodecamp.org/news/heres-how-i-created-a-markdown-app-with-electron-and-react-1e902f8601ca/
	* [GitHub - kazuar/mook: Markdown editor based on Electron and React](https://github.com/kazuar/mook)
* [Build a Real-Time Markdown Editor with Node.js ― Scotch.io](https://scotch.io/tutorials/building-a-real-time-markdown-viewer)

### Electron Docs and Tools
* https://www.electronjs.org/docs
* [Community | Electron](https://www.electronjs.org/community#boilerplates)
* [GitHub - electron-react-boilerplate/electron-react-boilerplate: A Foundation for Scalable Cross-Platform Apps](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
* https://github.com/electron/simple-samples/tree/master/activity-monitor
* https://github.com/electron/electron-api-demos/blob/master/main.js

### Fiddle of Markdown Processing
* [damp-water-igszw - CodeSandbox](https://codesandbox.io/s/damp-water-igszw?file=/package.json)
[JavaScript Markdown Parser](https://codepen.io/kvendrik/pen/Gmefv) - Codepen

### Helpful Bits and Pieces
* [Building a production electron/create-react-app application with shared code using electron-builder | by John Dyer | Medium](https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649)

electron-builder build —Mac -c.extraMetadata.main=build/main.js —publish never