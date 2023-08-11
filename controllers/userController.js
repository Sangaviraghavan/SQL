const db = require('../models/db');

let createUser = async (req, res) => {
    try {
        const { name, email, id } = req.body;

        // Insert data into the database
        const [result] = await db.query('INSERT INTO users (name, email, id) VALUES (?, ?, ?)', [name, email, id]);

        res.status(201).json({ message: 'User created successfully', userId: result.insertId, name: name, email: email, id: id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

let getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const [rows] = await db.query('SELECT * FROM users');

        res.status(200).json({ users: rows });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
};

module.exports = {createUser, getAllUsers}