module.exports = {
  apps: [
    {
      name: 'feria-unso-prod',
      script: 'node',
      args: '--env-file=.env ./backend/dist/server.js',
      watch: false, // Use own deploy script, not pm2's watch
      cwd: '/var/www/feria-unso/current',
    }
  ]
};
