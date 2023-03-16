writeCode

Write code to:-

- create a database named `sports`. 
//   use sports
//  /* db.createCollection('cricket')        if we not write any thing it database it will not get added. */

- list all databases present in local mongod server.  // show dbs

- create 3 collections named `cricket`, `football`, `TT` in sports databse. 
//  db.createCollection('cricket')
//  db.createCollection('football')
//  db.createCollection('TT')

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
// db.cricket.insertMany([{name: 'prabhat', age: 27, email: 'prabhatdbg21@gmail.com', bid_price: 'dbg'}, {name: 'ankit', age: 28, email: 'ankit.raj@gmail.com', bid_price: 'dbg'} ])

- list all collections in sports database. // show collections

- rename `TT` collection to `tennis`. // db.TT.renameCollection("tennis") 

- create a capped collection called `khokho` which should have max 3 documents.
  Try inserting more than 3 and see what happens?
  // db.createCollection('khokho', {capped: true, size: 1024, max:3})
  // db.khokho.insertMany([{name: 'ravi'}, {name: 'sumit'}, {name: 'bindia'}])
  // db.khokho.insertOne({name: 'shivam'})    it will remove 'ravi'

- check whether a collection is capped or not? // db.khokho.isCapped()

- drop all documents from `football` collection. // 
- delete cricket collection completely. // db.cricket.drop()
- delete sports database. //  db.dropDatabase()
- check which database you are connected to ? // db           output  sports
- connect to test database //  use test
