module.exports = {
  apps: [{
    name: 'aws-nodeserver',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-133-92-165.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/KeyPair4-AWS-NodeJS-Ubuntu.pem',
      ref: 'origin/master',
      repo: 'git@github.com:peteryxu/aws-nodeserver.git',
      path: '/home/ubuntu/aws-nodeserver',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
