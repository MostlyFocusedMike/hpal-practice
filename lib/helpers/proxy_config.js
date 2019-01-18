const Confidence = require('confidence');

module.export = new Confidence.Store({
    commentsAPI: {
        bearer: 'bearer',
        host: {
            $filter: 'NODE_ENV',
            $default: 'https://comments.api.2u.com',
            staging: 'https://comments.api.test.2u.com',
            development: 'http://comments',
            testing: 'I am the test',
        },
    },
});
