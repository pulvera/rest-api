// Chelsy Kate R. Pulvera
// BSIT-3R6
// IT322 Integrative Programming and Technologies

const express = require('express');
const app = express(); 

app.use(express.json());

const apple = [
    { id: 1, name: 'MacBook Air', category: 'Mac', brand: 'Apple'},
    { id: 2, name: 'MacBook Pro', category: 'Mac', brand: 'Apple'},
    { id: 3, name: 'iMac', category: 'Mac', brand: 'Apple'},
    { id: 4, name: 'iPhone 15 Pro', category: 'iPhone', brand: 'Apple'},
    { id: 5, name: 'iPhone 15', category: 'iPhone', brand: 'Apple'},
    { id: 6, name: 'iPhone 14', category: 'iPhone', brand: 'Apple'},
    { id: 7, name: 'iPhone 13', category: 'iPhone', brand: 'Apple'},
    { id: 8, name: 'iPhone SE', category: 'iPhone', brand: 'Apple'},
    { id: 9, name: 'iPad Pro', category: 'iPad', brand: 'Apple'},
    { id: 10, name: 'iPad Air', category: 'iPad', brand: 'Apple'},
]; 

// View all Apple products
app.get('/api/apple', (req, res) => {
    res.send(apple);
})

// View specific Apple product
app.get('/api/apple/:id', (req, res) => {
    const ios = apple.find(c => c.id === parseInt(req.params.id));
    if(!ios) res.status(404).send('The product with the given ID is not found.');
    res.send(ios);
});

// Post data or create
app.post('/api/apple', (req, res) => {
    if (!req.body.name || req.body.name.length < 3){
        res.status(404).send('Name is required and should be minimum of 3 characters.');
        return;
    }
    const ios = {
        id: apple.length + 1,
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
    };
    apple.push(ios);
    res.send(ios);
});

// Put = Update data
app.put('/api/apple/:id', (req, res) => {
    const ios = apple.find(c => c.id === parseInt(req.params.id));
    if(!ios) res.status(404).send('The product with the given ID is not found.');

    ios.name = req.body.name;
    ios.category = req.body.category;
    ios.brand = req.body.brand;
    res.send(ios);
});

// Delete data
app.delete('/api/apple/:id', (req, res) => {
    const ios = apple.find(c => c.id === parseInt(req.params.id));
    if(!ios) res.status(404).send('The product with the given ID is not found.');

    const index = apple.indexOf(ios);
    apple.splice(index, 1);

    res.send(ios);
});

app.listen(3000, () => console.log('Listening on port 3000...'));