const { app } = require('./app');
require('./routes/index');

const start = () => {
    try {
        app.listen(`${process?.env?.PORT || 3000}`, () => {
            console.log(`Server is working on http://localhost:${process?.env?.PORT || 3000}`);
        });
    } catch (err) {
        console.log('Server is closed');
        process.exit(1);
    }
}

start();

module.exports = {
    app: app
}



