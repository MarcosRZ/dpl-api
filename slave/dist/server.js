"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _colors = _interopRequireDefault(require("colors"));

var _multer = _interopRequireDefault(require("multer"));

var _app = require("./config/app.config");

var _handlers = require("./handlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fileManager = (0, _multer.default)({
  dest: 'uploads'
});
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
const port = process.argv[2] || _app.DEFAULT_PORT;
const apiBase = process.argv[3] || _app.API_BASE;
app.get(`${apiBase}/`, _handlers.helloHandler);
app.get(`${apiBase}/run`, _handlers.runHandler);
app.post(`${apiBase}/deploy/:project/:app`, fileManager.single('zip'), _handlers.deployHandler);
app.listen(port, () => {
  const endpoint = `http://localhost:${port}${apiBase}`;
  console.log(_colors.default.green(`[${_colors.default.magenta(_app.APP_NAME)}] up and running at [${_colors.default.magenta(endpoint)}]!`));
});