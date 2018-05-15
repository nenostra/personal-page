module.exports = {
    apps : [{
      name   : "app1",
      script : "./bin/www",
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
         "NODE_ENV": "production"
      }
    }]
  }