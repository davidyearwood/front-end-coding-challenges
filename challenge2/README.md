### The Challenge

This repository contains a PSD including all page-states as well as [accompanying comps](https://github.com/allylabs/fed-coding-challenge/tree/public/assets/comps) to illustrate how the page should look upon completion. We've also included [assets from the PSD](https://github.com/allylabs/fed-coding-challenge/tree/public/assets/img) in case you don't have Photoshop.

Your challenge is to render this layout design as a fully functional web page using HTML, CSS, and JavaScript. Your page should render perfectly in (at minimum) Chrome, Firefix and IE 9+.

### How to run this website
Run `npm install` or the yarn equivalent. 
You will need to be running this file on a local server. Any local server would do. [I used http-server: a command-line http server.](https://www.npmjs.com/package/http-server)

### Discussion of technologies used
To support IE 10+, I used the polyfills below:
`whatwg-fetch` - https://github.com/github/fetch
`promise-polyfill` - https://github.com/taylorhakes/promise-polyfill

`webpack` and `webpack-cli` are used to ebb the amount of HTTP requests
for script files, minify the file size, and utilize ES6 modules.

### Requirements for this challenge
* Anchors on the page can just have “#” as their href. [met]
* Only jQuery & vanilla javascript allowed (no plugins). [met]
* No CSS libraries/frameworks may be used, however CSS (pre)processors like Sass are welcome for compiling your own css. [met]
* Rate table must be built-out and ordered correctly by consuming provided JSON file. [met]
* Page should be responsive. [met] 
* Bonus-points for accessibility! [met]

#### A11y bonus points
I made sure that the HTML was semantically correct, and used ARIA attributes in the tab widget.

