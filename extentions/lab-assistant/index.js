const { app } = require('./../../app');
const { common } = require('./../../utils/common.util');

const adminRoute = require('./../../extentions/lab-assistant/routes/admin.route');
const candidateRoute = require('./../../extentions/lab-assistant/routes/candidate.route');
const masterRoute = require('./../../extentions/lab-assistant/routes/master.route');

app.use(`${common?.defaultPath}lab-assistant/admin`, adminRoute);
app.use(`${common?.defaultPath}lab-assistant/candidate`, candidateRoute);
app.use(`${common?.defaultPath}lab-assistant/master`, masterRoute);

module.exports = {
    app: app
};