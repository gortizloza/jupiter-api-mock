const { faker } = require('@faker-js/faker');

function generateImgUrl() {
    return faker.image.imageUrl();
}

module.exports = generateImgUrl;