const mongoose = require('mongoose');

const uri = 'mongodb+srv://fereshouidi298:5Y6hFlSXk3GNU8UF@cluster0.peiowiq.mongodb.net/messanger';

const connect = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB successfully!');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = connect;
