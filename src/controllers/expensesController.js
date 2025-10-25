const Expense = require('../models/Expense');


exports.createExpense = async (req, res) => {
try {
const { title, amount, date, category, notes } = req.body;
const expense = new Expense({ title, amount, date, category, notes });
await expense.save();
res.status(201).json(expense);
} catch (err) {
res.status(400).json({ message: err.message });
}
};


exports.getExpenses = async (req, res) => {
try {
const expenses = await Expense.find().sort({ date: -1 });
res.json(expenses);
} catch (err) {
res.status(500).json({ message: err.message });
}
};


exports.getExpense = async (req, res) => {
try {
const expense = await Expense.findById(req.params.id);
if (!expense) return res.status(404).json({ message: 'Not found' });
res.json(expense);
} catch (err) {
res.status(500).json({ message: err.message });
}
};


exports.updateExpense = async (req, res) => {
try {
const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
if (!expense) return res.status(404).json({ message: 'Not found' });
res.json(expense);
} catch (err) {
res.status(400).json({ message: err.message });
}
};


exports.deleteExpense = async (req, res) => {
try {
const expense = await Expense.findByIdAndDelete(req.params.id);
if (!expense) return res.status(404).json({ message: 'Not found' });
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ message: err.message });
}
};