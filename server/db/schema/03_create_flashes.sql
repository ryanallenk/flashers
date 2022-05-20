DROP TABLE IF EXISTS flashes CASCADE;
CREATE TABLE flashes (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255),
  location_id INTEGER REFERENCES locations(id)
);