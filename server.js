const express = require('express');
const createError = require('http-errors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);

const clientDirectory = path.join(__dirname, '/dist');

//  Forward All Routes By Default to React Build if In Production Mode
if (fs.existsSync(clientDirectory) && process.env.NODE_ENV !== 'test') {
  console.log('Production Or Development Environment');
  app.use(express.static(clientDirectory));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(clientDirectory, 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  try {
    next(createError(404));
  } catch (err) {
    next(err);
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // return the error message
  res.status(err.status || 500);
  res.json({ error: err });
});