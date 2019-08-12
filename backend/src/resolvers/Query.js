module.exports = {
  /**
   * Query
   * @param {parent} - what makes the request (the parent schema)
   * @param {args} - request arguments passed to the query
   * @param {ctx} - the exposed database, and request params e.g., headers, cookies etc.
   * @param {info} - information around the coming in graphql query
   */

  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items();
    return items;
  }
};
