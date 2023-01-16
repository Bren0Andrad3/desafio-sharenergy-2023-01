'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cat-controller');
const authService = require('../services/auth-service');

router.get('/:id',authService.authorize, controller.get);

module.exports = router;