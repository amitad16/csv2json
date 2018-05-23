const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');
const csvFilePath = path.join(__dirname, 'customer-data.csv');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    try {
      fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj, undefined, 2));
    } catch (e) {
      console.log(e.message);
    }
  }, (err) => {
    console.log(err);
  });
