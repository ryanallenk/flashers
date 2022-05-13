DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  lat NUMERIC(10, 8), 
  long NUMERIC(10, 8), 
  image VARCHAR(2048),
  grade VARCHAR(3),
  user_rating INTEGER,
  climb_description VARCHAR(255),
  user_id integer REFERENCES users(id)
)