module.exports = {
  apps: [
    {
      name: 'next-prisma-mysql',
      script: 'yarn',
      args: 'start',
      watch: ['package.json'],
      watch_delay: 12000,
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
}
