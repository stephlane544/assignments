const uuid = require('uuid')
module.exports = [
    {
        name: 'spaghetti',
        type: 'pasta',
        sauce: 'red',
        _id: uuid.v4()
    },
    {
        name: 'fettuccine',
        type: 'pasta',
        sauce: 'alfredo',
        _id: uuid.v4()
    },
    {
        name: 'lasagna',
        type: 'pasta',
        sauce: 'marinara',
        _id: uuid.v4()
    }
]
