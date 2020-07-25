
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
          {
            VIN: '123456789012345', 
            make: 'BMW', 
            model: '750', 
            mileage: '10,000' 
          },
          
          {
            VIN: '456756789012345',
             make: 'Aston Martin', 
             model: 'DB11',
            mileage: '8,000' 
          },

          {
            VIN: '890156789012345',
             make: 'Lamborghini', 
             model: 'Murciélago', 
             mileage: '2000' 
            },
          {
            VIN: '274556789012345', 
            make: 'Alfa Romeo', 
            model: '4C', 
            mileage: '10,000' 
          },
      ]);
    });
};
