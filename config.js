module.exports = {

  'title': 'learnLX', // Website Title - for SEO

  'description': '', // Website Description - for SEO

  'logging': 'dev', // default: combined, others: common, dev

  'apiOnly': false, // Determines if web interface should be served (and API is served at /api/...) or if server should start serving API at root (/...).

  'port': '3000', // Default 3000 for Testing, 80 for Production, 443 for Production SSL

  'secret': 'learnLX', // This should be a secure string of mixed-case characters, numbers, and symbols.

  'database': 'mongodb://localhost/learnLXDB', // Location for MongoDB Database

}
