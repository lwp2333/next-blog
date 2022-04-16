module.exports = {
  apps: [
    {
      name: 'next-prisma-mysql',
      script: 'yarn',
      args: 'start',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['124.222.243.109'],
      ref: 'origin/master',
      repo: 'https://github.com/lwp2333/next-prisma-mysql',
      path: '/www/wwwroot/next-prisma-mysql',
      'post-deploy': 'yarn && yarn build && pm2 restart ecosystem.config.js',
    },
  },
}
