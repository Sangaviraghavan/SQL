const db = require('../models/db');

let createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Insert data into the database
        const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);

        res.status(201).json({ message: 'User created successfully', userId: result.insertId, name: name, email: email });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

let getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Fetch user data from the database
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = rows[0];
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error retrieving user' });
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

module.exports = {createUser, getUserById, getAllUsers}