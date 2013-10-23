var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://teatr-kleks.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // -- OAuth
  clientId: 'UmgawrO534ge8mjF',
  clientSecret: '8b8fe95ff8b202d346ef71945fe1f610',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  }

}