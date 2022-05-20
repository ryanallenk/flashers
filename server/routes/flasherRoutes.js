
const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/climbs', (req, res) => {
    const dbCommand = 'SELECT * FROM locations';
    db.query(dbCommand).then(data => {
      res.json(data.rows);
    })
  });

  router.post('/climbs', (req, res) => {

    const {lat, lng, image, grade, user_rating, climb_description, creator_id} = req.body;
    
    const dbCommand = 'INSERT INTO locations (lat, long, image, grade, user_rating, climb_description, creator_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';

    db.query(dbCommand, [lat, lng, image, grade, user_rating, climb_description, creator_id])
    .then(data => {
      res.json(data.rows);
    })
  });

  router.put("/climbs/:id", (req, res) => {
    const {lat, lng, image, grade, user_rating, climb_description, creator_id, id} = req.body;

    
    const dbCommand = 'UPDATE locations SET lat = $1, long = $2, image = $3, grade = $4, user_rating = $5, climb_description = $6, creator_id = $7 WHERE id = $8'

    db.query(dbCommand, [lat, lng, image, grade, user_rating, climb_description, creator_id, id])
    .then(data => {
      res.json(data.rows);
    })
  });
  

  // flashes table routes
  // add a "flash" to the table for a 
  router.post('/api/flashes', (req, res) => {

    const {user_id, location_id} = req.body;
    
    const dbCommand = 'INSERT INTO flashes (user_id, location_id) VALUES ($1, $2)';

    db.query(dbCommand, [user_id, location_id])
    .then(data => {
      res.json(data.rows);
    })
  });

  router.get('/api/flashes', (req, res) => {

    const {user_id} = req.body;
    
    const dbCommand = 'SELECT * FROM flashes WHERE user_id = $1 JOIN locations ON locations.id = location_id)';

    db.query(dbCommand, [user_id])
    .then(data => {
      res.json(data.rows);
    })
  });
  return router;
}