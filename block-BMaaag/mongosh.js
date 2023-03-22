db.himalayas.insertOne(
    {name: 'Dhauldhar range', height: '4000 mtrs'}
)


db.himalayas.insertMany([
    {name: 'Dhauldhar range', height: '4000 mtrs'},
    {name: 'Karakoram range', height: '4500 mtrs'},
    {name: 'Ladakh range', height: '5000 mtrs'},
])