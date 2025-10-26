module.exports = {
  apps: [
    {
      name: 'feria-unso',
      script: 'npm',       // Run the 'npm' command
      args: 'run start',   // with 'run start' as its arguments
      watch: false         // Use own deploy script, not pm2's watch
    }
  ]
};
