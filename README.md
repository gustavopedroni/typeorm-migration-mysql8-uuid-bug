# Typeorm Migration with UUID on MySql 8

## Steps to bug

  1. Run ``docker-compose up -d``
  2. Run ``npm install``;
  3. Run ``docker-compose run node npm run migration:run``;
  4. Run ``docker-compose run node npm run migration:generate migrations/second`` 
  5. Done! Even without any changes to the entity, a migration was generated again.