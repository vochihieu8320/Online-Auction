module.exports = {
  apps : [{
    name: "WNC",
    script: "dist/app.js",
    env: {
      PORT: 3000,
      NODE_ENV: "development",
      db : "mongodb://localhost:27017/AppChat",
      JWT_TOKEN_SECRET: "vch@11111111iiiiiiiii",
      Domain_Fe: "http://localhost:4200",
      email_password: "ywdkvqdaxlgiqnlq",
      email_name: "chihieu8320@gmail.com",
      google_client_id: "346686068619-mh8i7ab64el9n4i3ueuqgr0bq6e24qsg.apps.googleusercontent.com",
      google_client_secret: "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",
      google_refresh_token: "1//04Nqko-0LPpklCgYIARAAGAQSNwF-L9Ir8NKCVcXcWgDUKx-wQ0p_U04BkPPSEMQgPIqZv06jAD5aVRThzlxWZVR2jXucpT0RgiM",
      google_redirect_uri: "https://developers.google.com/oauthplayground/"
    },
    env_production: {
      PORT: 3000,
      NODE_ENV: "production",
      JWT_TOKEN_SECRET: "vch@11111111iiiiiiiii",
      db : "mongodb+srv://appchat:zK26s3auQa52Ux1I@cluster0.aw7bq.mongodb.net/AppChat?retryWrites=true&w=majority",
      db_password: "zK26s3auQa52Ux1I",
      db_username: "appchat",
      google_client_id: "346686068619-mh8i7ab64el9n4i3ueuqgr0bq6e24qsg.apps.googleusercontent.com",
      google_client_secret: "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",
      google_refresh_token: "1//04Nqko-0LPpklCgYIARAAGAQSNwF-L9Ir8NKCVcXcWgDUKx-wQ0p_U04BkPPSEMQgPIqZv06jAD5aVRThzlxWZVR2jXucpT0RgiM",
      google_redirect_uri: "https://developers.google.com/oauthplayground/"
    },
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
    time: true
  }]
};
