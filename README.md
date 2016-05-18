# electron-react-webpack-minimal

**Clone and run for a quick way to see an Electron using React and Webpack in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation. I just added React and Webpack minimal configs.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron React Webpack application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `webpack.config.js` - Webpack configuration file.

I added a babel config:
- `.babelrc`

The entry point for Webpack is:
- `app/index.js`

You can learn more about Electron components within the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start).

This boilerplate was based on the first part of [Building Native Desktop App With Web Tech](http://www.juxt.com/pov/thoughts/building-native-desktop-apps-with-web-tech) without sass or hot reloads.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone git@github.com:Miyan0/electron-react-webpack-boilerplate.git
# Go into the repository
cd electron-react-webpack-boilerplate
# Install dependencies and run the app
npm install
# Run Webpack
webpack
# Start the app
npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC0 (Public Domain)](LICENSE.md)
