const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const dbCommand = 'SELECT * FROM locations';
    db.query(dbCommand).then(data => {
      res.json(data.rows);
    })
  });
  
  return router;
}