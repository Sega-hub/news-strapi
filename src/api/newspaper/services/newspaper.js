'use strict';

/**
 * newspaper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newspaper.newspaper');
