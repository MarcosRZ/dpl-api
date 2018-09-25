'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphql = require('./middleware/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _auth = require('./middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

var _config = require('./config');

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_db2.default.start();

const app = (0, _express2.default)();

app.use(_bodyParser2.default.json({ limit: '1000mb' }));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// app.use(session);
app.use(_auth2.default);

app.use((req, res, next) => {
  next();
});
// app.use(cors(corsOptions));
// app.use(
//   apolloUploadExpress({
//     uploadDir: constants.tmpPath,
//   }),
// );
(0, _graphql2.default)(app);

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(_config.PORT, err => {
  if (err) {
    console.error(err);
  } else console.log(`API listening at localhost:${_config.PORT}`);
});