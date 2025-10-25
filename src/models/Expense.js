const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
title: { type: String, required: true, trim: true },
amount: { type: Number, required: true, min: 0 },
date: { type: Date, required: true, default: Date.now },
category: { type: String, trim: true, default: 'General' },
notes: { type: String, trim: true }
}, { timestamps: true });


module.exports = mongoose.model('Expense', ExpenseSchema);