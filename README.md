# Webpackconfig

My personal Webpack Setup

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Install webpack globally

```bash
npm i -g webpack@latest
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository: 

```bash
git clone git@github.com:yaroschiffelers/webpackconfig.git
```

Cd to the project folder:

```bash
cd webpackconfig
```

Run Yarn install:

```bash
yarn install
```

### To start Webpack with hot reload:

```bash
yarn run dev
```

Open http://localhost:8080/ in your browser to watch webpack perform it's magic.

### To simply let webpack watch your files:

```bash
yarn run watch
```
and open index.html in your browser.

### To build your files for production (including uglify Js/CSS)

```bash
yarn run production
```

Your production-ready files are in /public 

Enjoy! 

## Deployment

Add additional notes about how to deploy this on a live system

## Got Stuck?

Ckeckout the webpack help page. Run:

```bash
webpack -help
```

in your terminal. 

## Built With

* [webpack](https://webpack.js.org/) - Webpack is a module bundler. 

## Authors

* **Yaro Schiffelers** - *Initial work* - [yaroschiffelers](https://github.com/yaroschiffelers)

See also the list of [contributors](https://github.com/yaroschiffelers/vue-design-blocks/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Tutorial on how to setup your own webpack config [medium](https://codeburst.io/easy-guide-for-webpack-2-0-from-scratch-fe508a3ce44e)


