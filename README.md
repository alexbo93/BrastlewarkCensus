# Brastlewark census: for The most gossipy inhabitants

## Getting started

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/alexbo93/BrastlewarkCensus.git
> cd BrastlewarkCensus
> npm install
> npm start

The app will be served through port 8090. In case this is already used
in your local machine feel free to change it in webpack.config.js:

module.exports = {
  /* ... */
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8090 <-- Change it here
  }
};
```

## Running Tests

Follow the same procedure to start the project but run

npm test

instead of

npm start

#############
