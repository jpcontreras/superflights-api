db.createUser({
  user: 'usersuper',
  pws: '123456',
  roles: [
    {
      role: 'readWrite',
      db: 'superFlights',
    },
  ],
});
