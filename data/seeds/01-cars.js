// STRETCH
const cars = [
    {
        vin: '1HGCR2F38FY269159',
        make: 'BMW',
        model: 'M3',
        mileage: 120000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1HGCR2F38FYK69159',
        make: 'Porsche',
        model: '911',
        mileage: 1000,
        title: 'salvage',
    },
    {
        vin: '1HGGR2F38FY269159',
        make: 'Kia',
        model: 'Sorento',
        mileage: 10000,
        title: 'clean',
    }
];

// exports.seed = function(knex) {
//     return knex('cars').del()
//         .then(function () {
//             return knex('cars').insert(cars);
//         });
// }; 

//or

// exports.seed = function(knex) {
//     return knex('cars')
//         .truncate()
//         .then( () => {
//             return knex('cars').insert(cars);
//         });
// };

//or

exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
}
