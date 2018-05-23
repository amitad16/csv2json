1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?
Ans: The project structure is basic. Root directory name is 'csv-json' which contains 'csvtojson.js', 'package.js' and 'customer-data.js'.
    'csvtojson' module is used to complete the assignment. The json data is stored in customer-data.json file.
    Core modules used are 'fs'and 'path'.

    DIFFICULTIES:
    If just jsonObject is passed it inserts only [Obejct object] like structure in customer-data.json file.
    So, used JSON.stringify() method to overcome it.

2. How did you test your project to verify that it works?
Ans: Used the same csv file, if customer-data.json file is created with 1000 records then it works. No special testing modules are used.