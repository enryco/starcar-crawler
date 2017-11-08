# starcar-crawler
a tool using webdriver to get current free offerings

# usage

- clone
- run `$ npm i` (or yarn)
- change parameters in file `features/crawl.js`:
  - `search` parameter: search for cities or leave blank to display all (hamburg = HH) : default: berlin
  - `carType` parameter: search for all (0), cars (1) or trucks (2). default: 2
- `$ npm run get` to get a list of latest offerings
