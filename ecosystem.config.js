module.exports = {
  apps: [
    {
      name: 'feria-unso',
      script: 'node',
      args: '--env-file=.env ./backend/dist/server.js',
      watch: false // Use own deploy script, not pm2's watch
    }
  ]
};
