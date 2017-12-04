# generator-pauls-easy-react-webpack [![NPM version][npm-image]][npm-url]

This is a generator to create a simple React 16 project with Webpack

## Installation

Obvious dependencies: [Yeoman](http://yeoman.io) and [node.js](https://nodejs.org/).

If you've already have those, install the generator:

```bash
npm install -g generator-pauls-easy-react-webpack
```

Then generate your new project:

```bash
mkdir myAwesomeProject
cd myAwesomeProject
yo pauls-easy-react-webpack
```

## About the generator

This generator is aimed towards my personal preferences when creating React apps, so maybe it will not be really useful to you, but here are some of its features:

- React 16 and [Material-UI](http://www.material-ui.com) as the main tools for development.
- Babel for ES6 and React.
- Webpack with webpack-dev-server, css-loader and style-loader for _dev_ and extract-text-webpack-plugin for _production_.
- ESLint with a lot of settings for React and ES6 "best practices".
- Directory structure pretty similar to the one described in [this Medium article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
- Basic component generation

>Important Notice: As you can see in the webpack config files, the `entry` option is set to `APP_DIR + '/scenes/Index/Index.jsx'` instead of the usual `index.js`. This is because I usually just start the app from the main component, so there's no need for an `index.js`. I will surelly add an option to the generator in order to make this customizable, but for the moment you may change it by hand.

Future features:

- New generators to create components and similar scaffolding elements.
- Support for Redux (maybe...).

## How to run your project

I use yarn in these examples, but this obviously works too for npm.

Running webpack dev server:

```bash
yarn dev
```

Building for production:

```bash
yarn build
```

## Creating Components

You can create a really basic component by running

```bash
yo pauls-easy-react-webpack:component
```

on the root directory of your project.

The generator is going to ask you if you need a `component` or a `scene` and it will use the dir `src/components` or `src/scenes`, respectively. For the moment, it just creates a basic component inside one of these directories. It will be able to create sub-components in future releases.

## Collaborating

Feel free to open issues, send me a pull request or [contact me](https://paulmdorr.me/contact)

## License

[MIT](https://opensource.org/licenses/MIT)

[npm-image]: https://badge.fury.io/js/generator-pauls-easy-react-webpack.svg
[npm-url]: https://npmjs.org/package/generator-pauls-easy-react-webpack