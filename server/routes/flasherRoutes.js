const router = require('express').Router();

module.exports = () => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const climbs = ['Yosemite', 'Niagra Glen', 'Joshua Tree'];
    res.json(climbs);
  });
  
  return router;
}