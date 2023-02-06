# Jupiter Toys Mock API

This script starts a JSON server using the `json-server` package and serves a REST API based on the data in the `./db/products.json` file.

## Usage
### Add a database
At the root directory create a folder named `db` and inside create a file named `products.json` like the following:
``` json
{
  "products": [
    {
      "quantity": 20,
      "visible": true,
      "image": "https://my-awesome-host.s3.us-east-2.amazonaws.com/852e2ebb-3ce1-4fcc-8c8f-cb1b7c3a90a5.png",
      "category": "Stuffed Toys",
      "id": "12acf1f0-83af-4c73-be6a-a1c6af392c9f",
      "price": 65,
      "stars": 1,
      "title": "Cheerful Capybara"
    },
    {
      "quantity": 3,
      "visible": false,
      "image": "https://my-awesome-host.s3.us-east-2.amazonaws.com/4c7437e2-e25d-4005-b7eb-6f650b1d7cae.png",
      "category": "Stuffed Toys",
      "id": "a01ddfef-d53e-44e3-88f8-e35f30d4903a",
      "price": 16,
      "stars": 4,
      "title": "Cheerful Capybara"
    },
    {
      "quantity": 5,
      "visible": true,
      "image": "https://my-awesome-host.s3.us-east-2.amazonaws.com/2e438536-4944-482e-9891-9b0cd70ff5ff.jpeg",
      "category": "Stuffed Toys",
      "id": "6926eed9-e8e1-4cac-9d49-897d0c30e005",
      "price": 100,
      "stars": 4,
      "title": "poodle"
    }
  ]
}
```
To run the script, use the following command:
```
npm run products-db
```
The script uses the `--watch` option which tells `json-server` to watch for changes in the `products.json` file and update the API in real-time. It also uses the `--middlewares` option to include custom functions to format the id for each new product as an `uuid`, and include a random image url for the `image` property. 