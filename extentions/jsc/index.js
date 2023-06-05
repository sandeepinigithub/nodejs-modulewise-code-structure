const { app} = require('./../../app');
const { common } = require('./../../utils/common.util');

const adminRoute = require('./../../extentions/jsc/routes/admin.route');
const candidateRoute = require('./../../extentions/jsc/routes/candidate.route');
const masterRoute = require('./../../extentions/jsc/routes/master.route');


app.use(`${common?.defaultPath}jsc/admin`, adminRoute);
app.use(`${common?.defaultPath}jsc/candidate`, candidateRoute);
app.use(`${common?.defaultPath}jsc/master`, masterRoute);

module.exports = {
    app: app,
}
