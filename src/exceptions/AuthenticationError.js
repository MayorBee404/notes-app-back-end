const ClientError = require('./ClientError');

class AuthenticationError extends ClientError {
  constructor(message) {
    super(401, message);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationError;
