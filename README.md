**About**

This project is API that was created for [Shopping App](https://github.com/binczech/shopping-app). It is written in [Express.js](https://expressjs.com/). It reads data from JSON files and exposes data through 3 endpoints.

**Prerequisities**

* [Node.js](https://nodejs.org/)

**How to run**

1. `npm install`
2. Port can be set in `API_PORT` - `export API_PORT=3001`. If variable not set, default port is 3001.
3. `node app.js`

**Endpoints**

* **/hp** - returns list categories with leaflets
* **/discouts** - returns list of products at discounts with list of shops and details
* **/leaflet** - returns leaflet with list of pages