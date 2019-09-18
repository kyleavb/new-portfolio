'use strict'

const router = require('express').Router();
const main = require('./main');

router.get( '/', main );
// router.get( [ '/api/health', '/api/healthz' ], health );

module.exports = router;