writeCode

Write code to:-

- create a database named `mountains` // use mountains
- a collection inside that database named `himalayas`  //  db.createCollection('himalayas')
- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`
//  db.himalayas.insertOne({name: 'Dhauldhar range', height: '4000 mtrs'})

- insert multiple document using insertMany command
//  db.himalayas.insertMany([
    {name: 'Dhauldhar range', height: '4000 mtrs'},
    {name: 'Karakoram range', height: '4500 mtrs'},
    {name: 'Ladakh range', height: '5000 mtrs'},
])

- find all documents from mountains // db.himalayas.find()

- find a single document using name //  db.himalayas.find({name: 'Karakoram range'})
