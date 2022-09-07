const { route } = require('next/dist/next-server/server/router');

const routes = require('next-routes')();

routes
     .add('/:wallet', '/')
   
   
module.exports = routes;