// const parse = require('csv-parse');
// const fs = require('fs');

// const results = [];

// fs.createReadStream('kepler_data.csv')
//   .pipe(
//     parse({
//       comment: '#',
//       headers: true,
//     })
//   )
//   .on('data', (data) => {
//     results.push(data);
//   })
//   .on('error', (err) => {
//     console.log(err);
//   })
//   .on('end', () => {
//     console.log(results);
//     console.log('done');
//   });

const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('kepler_data.csv')
  .pipe(
    csv({
      comment: '#',
      headers: true,
    })
  )
  .on('data', (data) => {
    results.push(data);
  })
  .on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    console.log(results);
    console.log('done');
  });
