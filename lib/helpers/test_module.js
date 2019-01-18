module.exports = {
    method: 'GET',
    path: '/player/{path*}',
    options: {
        auth: false,
        description: 'Serves up compiled player code that contains no data',
        handler: {
            proxy: {
                override
                xforward: true,
                passThrough: true,
                get mapUri() {
                    return (req) => {
                        console.log('this.xforward: ', this.xforward);
                        console.log(JSON.stringify(req));
                    };
                },
            },
        },
    },
};