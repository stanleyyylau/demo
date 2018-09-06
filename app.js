const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

// CONFIGURATIONS
app.set('port', 4000);
app.set('etag', false);
app.set('x-powered-by', false);

// ROUTING, include server bundle here
const gallery = require('./assets/server');
app.use(`./gallery`, gallery);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen('4000', function(){
  console.log('Server listening at port 4000')
})

