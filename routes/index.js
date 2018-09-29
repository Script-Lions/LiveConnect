var express = require('express');
var router = express.Router();

// import React from 'react';
// import Root from '../src/components/Root.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LiveConnect' });
});

module.exports = router;

ReactDOM.render( <Root /> , document.getElementById('root'));
registerServiceWorker();
