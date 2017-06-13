var express = require('express');
var create   = require('../controllers/form_create');
var del     = require('../controllers/form_del');
var router  = express.Router();

router.route('/form')
    .post(create);
router.route('/form/:id')
    .delete(del);

module.exports = router;