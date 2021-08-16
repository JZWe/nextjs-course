const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// Nextjs 可針對不同開發流程提供相對應的 custom settings
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'arturia',
        mongodb_password: '12ahcold',
        mongodb_clutsername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'arturia',
      mongodb_password: '12ahcold',
      mongodb_clutsername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
