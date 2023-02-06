# Jupiter Toys Mock API

This script starts a JSON server using the `json-server` package and serves a REST API based on the data in the `./db/products.json` file.

## Usage
To run the script, use the following command:
```
npm run products-db
```
The script uses the `--watch` option which tells `json-server` to watch for changes in the `products.json` file and update the API in real-time. It also uses the `--middlewares` option to include a custom function that formats the id for each new products as an `uuid`. 