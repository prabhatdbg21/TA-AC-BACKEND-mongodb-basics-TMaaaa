var users = [
    {
        title: 'books',
        createdAt: 22/03/23,
        details: 'all books',
        author: {
            name: 'prabhat',
            email: "abc@gmail.com",
            age: 28
        },
        tags : ['html', 'css']
    },
    {
        title: 'sports',
        createdAt: 21/08/12,
        details: 'all sports',
        author: {
            name: 'ankit',
            email: "abc@gmail.com",
            age: 30
        },
        tags : ['html', 'js']
    },
    {
        title: 'bricks',
        createdAt: 27/07/19,
        details: 'all bricks',
        author: {
            name: 'ravi',
            email: "abc@gmail.com",
            age: 29
        },
        tags : ['js', 'css']
    }
]

db.users.find({
    sports: {$in: [ "football", "cricket" ]} 
})