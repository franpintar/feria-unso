module.exports = {
  apps: [
    {
      name: 'feria-unso',
      script: 'node',
      args: '--loader ts-node/esm --env-file=.env ./backend/src/server.ts',
      watch: false // Use own deploy script, not pm2's watch
    }
  ]
};
