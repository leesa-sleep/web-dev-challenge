const app = require('./server');

app.listen(process.env.PORT || 9090, function () {
  console.log('server running');
});