'use strict';

/**
 * mobile-number service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mobile-number.mobile-number');
