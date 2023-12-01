# Typeorm Migration with UUID on MySql 8

## Steps to bug

  1. Run ``npm install``;
  2. Run ``docker-compose run node npm run migration:run``;
  3. Run ``docker-compose run node npm run migration:generate migrations/second`` 
  4. Done! Even without any changes to the entity, a migration was generated again.