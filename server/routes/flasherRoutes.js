
const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/climbs', (req, res) => {
    const dbCommand = 'SELECT * FROM locations';
    db.query(dbCommand).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/climbs/:user_id', (req, res) => {
    const dbCommand = 'SELECT COUNT (*) FROM locations WHERE creator_id = $1';
    db.query(dbCommand, [req.params.user_id])
    .then(data => {
      res.json(data.rows);
    })
  });

  router.post('/climbs', (req, res) => {

    const {lat, lng, image, grade, user_rating, climb_description, creator_id, climb_name} = req.body;
    
    const dbCommand = 'INSERT INTO locations (lat, long, image, grade, user_rating, climb_description, creator_id, climb_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

    db.query(dbCommand, [lat, lng, image, grade, user_rating, climb_description, creator_id, climb_name])
    .then(data => {
      res.json(data.rows);
    })
  });

  router.put("/climbs/:id", (req, res) => {
    const {lat, lng, image, grade, user_rating, climb_description, creator_id, id, climb_name} = req.body;

    
    const dbCommand = 'UPDATE locations SET lat = $1, long = $2, image = $3, grade = $4, user_rating = $5, climb_description = $6, creator_id = $7, climb_name = $9 WHERE id = $8'

    db.query(dbCommand, [lat, lng, image, grade, user_rating, climb_description, creator_id, id, climb_name])
    .then(data => {
      res.json(data.rows);
    })
  });
  

  // flashes table routes
  // add a "flash" to the table 
  router.post('/flashes', (req, res) => {

    const {user_id, location_id} = req.body;
    
    const dbCommand = 'INSERT INTO flashes (user_id, location_id) VALUES ($1, $2)';

    db.query(dbCommand, [user_id, location_id])
    .then(data => {
      res.json(data.rows);
    })
  });

  // get all flashes for a certain user
  router.get(`/flashes/:user_id`, (req, res) => {
    
    const dbCommand = "SELECT COUNT (*) FROM flashes WHERE user_id = $1";

    db.query(dbCommand, [req.params.user_id])
    .then(data => {
      res.json(data.rows);
    })
  });
  return router;
}