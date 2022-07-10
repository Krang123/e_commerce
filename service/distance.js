const request = require('request');

const apiKey = "jst9DISq606NIjKlwPCyY1prkUeQQDDT3tYtO4DfyX1jNd7blxpaiobZzGBzY763" ; // my personal key

const zipCodeURL = "https://www.zipcodeapi.com/rest/";


var distance = {
    find: (req, res, next) => {
        request(zipCodeURL + apiKey +
            '/distance.json/' + req.params.zipcode1 + '/' +
            req.params.zipcode2 + '/mile',
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({
                        distance: -1
                    });
                }
            });
    }
};

module.exports = distance;
