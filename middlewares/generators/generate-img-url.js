const { faker } = require('@faker-js/faker');

function generateImgUrl() {
    return faker.internet.avatar();
}

module.exports = generateImgUrl;