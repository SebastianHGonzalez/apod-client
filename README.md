# apod-client
React client for NASA's Astronomy Picture of the Day API endpoint (https://api.nasa.gov/api.html#apod)

## Environments
- [GitHub Pages](https://sebastianhgonzalez.github.io/apod-client/)


## Table of Contents

- [Development](#Development)
- [Deploy](#Deploy)

## Development

### Setup config file

```
cd <path-to-project>
cp ./src/Config/example_config.ts ./src/Config/config.ts
```

### Set api key

Set it modifing config.ts or set it on environment variables

#### Set environment variables

``` bash
export APOD_API_KEY=<your-key>
export APOD_BASE_URL=https://api.nasa.gov
```

### Start development server

``` bash
npm start
```

## Deploy

Deploy to github pages

``` bash
npm run deploy
```