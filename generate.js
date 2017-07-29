module.exports = function() {
    var _ = require("lodash");
    var faker = require("faker");

    return {
        customers: _.times(100, function(index) {
            return {
                id: faker.random.uuid(),
                name: faker.name.findName(),
                address: {
                    address: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    pincode: faker.address.zipCode(),
                    country: faker.address.country()
                },
                email: faker.internet.email(),
                url: faker.internet.url()
            }
        })
    }
}