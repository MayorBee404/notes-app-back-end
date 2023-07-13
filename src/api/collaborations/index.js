const CollaborationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'collaborations',
  version: '1.0.0',
  register: async (server, {
    collaborationsService, notesService, usersService, validator,
  }) => {
    const collaborationsHandler = new CollaborationsHandler(
      collaborationsService, notesService, usersService, validator,
    );
    server.route(routes(collaborationsHandler));
  },
};
