"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::newspaper.newspaper", ({ strapi }) => ({
  async create(ctx) {
    try {
      const { title, discription, newsDate, newsPicture, newsArticle } = ctx.request.body;

      if (!title || !newsArticle) {
        return ctx.badRequest("Title and content are required");
      }

      const newspaper = await strapi.entityService.create("api::newspaper.newspaper", {
        data: { title, discription, newsDate, newsPicture, newsArticle },
      });

      return ctx.created(newspaper);
    } catch (error) {
      ctx.throw(500, "Something went wrong");
    }
  },
}));
