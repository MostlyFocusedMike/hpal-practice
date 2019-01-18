module.exports = {
    place: 'routes',
    list: true,
    method: 'route',
    example: {
        $strict: false,
        $requires: [
            'boom',
            'joi',
            'toys',
        ],
        $value: {
            method: 'get',
            path: '/api/v1/',
            options: {
                tags: ['api', ''],
                description: 'Does a thing',
                handler: async (request) => {
            const { Database } = request.server.app;
        },
            },
        },
    },
}