module.exports = {
    port: 3000,
    session: {
        secret: 'practice',
        key: 'practice',
        maxAge: 1000 * 60 * 30
    },
    mongodb: 'mongodb://localhost:27017/practice'
};