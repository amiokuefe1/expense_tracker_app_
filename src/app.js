const express = require('express');
const cors = require('cors');


const expensesRouter = require('./routes/expenses');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/expenses', expensesRouter);


app.use((req, res) => {
res.status(404).json({ message: 'Not Found' });
});


module.exports = app;