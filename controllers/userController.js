const db = require('../models/db');

let createUser = async (req, res) => {
    try {
        const { name, email, id } = req.body; 

        // Insert data into the database
        const [result] = await db.query('INSERT INTO users (name, email, id) VALUES (?, ?, ?)', [name, email, id]);

        res.status(201).json({ message: 'User created successfully', userId: result.id, name: name, email: email });
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

let getUserById = async (req, res) => {
    const userId = req.params.id; // Assuming you're passing the user ID as a route parameter

    try {
        // Fetch a user from the database based on ID
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

        if (rows.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ user: rows[0] });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error fetching user' });
    }
};


let deleteUserById = async (req, res) => {
    const userId = req.params.id; // Assuming you're passing the user ID as a route parameter

    try {
        // Delete the user from the database based on ID
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [userId]);

        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
};


module.exports = {createUser, getAllUsers, getUserById, deleteUserById}