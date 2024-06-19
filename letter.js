const express = require('express');
const cors = require('cors');
const router = express.Router();
const connection = require('./db');

router.use(cors());

// Fetch user data based on type and id
router.get('/:type/:id', (req, res) => {
    const { type, id } = req.params;
    let tableName;

    switch (type) {
        case 'student':
            tableName = 'student_data';
            break;
        case 'teacher':
            tableName = 'teacher_data';
            break;
        case 'official':
            tableName = 'official_data';
            break;
        default:
            return res.status(400).json({ error: 'Invalid user type' });
    }

    const query = `SELECT name FROM ${tableName} WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user data:', err);
            return res.status(500).json({ error: 'Error fetching user data' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(results[0]);
    });
});

router.get('/get', (req, res) => {

    
    const { id } = req.query;
    const query = 'SELECT * FROM letter WHERE id = ?';
    console.log("TT##",id);
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching letter:', err);
            return res.status(500).json({ error: 'Error fetching letter' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Letter not found' });
        }

        res.json(results[0]);
    });
});

// Save letter
// router.post('/saveLetter', (req, res) => {
//     const { toName, fromName, letterContent } = req.body;

//     const insertLetterQuery = 'INSERT INTO letter (toName, fromName, content) VALUES (?, ?, ?)';
//     connection.query(insertLetterQuery, [toName, fromName, letterContent], (err, results) => {
//         if (err) {
//             console.error('Error inserting letter data:', err);
//             res.status(500).json({ error: 'An error occurred while saving the letter.' });
//         } else {
//             console.log('Letter data successfully inserted:', results);
//             res.status(200).json({ message: 'Letter sent and saved successfully!', letter: { toName, fromName, letterContent } });
//         }
//     });
// });

// Save letter
router.post('/saveLetter', (req, res) => {
    const { toName, fromName, letterContent } = req.body;

    const insertLetterQuery = 'INSERT INTO letter (toName, fromName, content) VALUES (?, ?, ?)';
    connection.query(insertLetterQuery, [toName, fromName, letterContent], (err, results) => {
        if (err) {
            console.error('Error inserting letter data:', err);
            res.status(500).json({ error: 'An error occurred while saving the letter.' });
        } else {
            const insertedLetterId = results.insertId; // Get the inserted letter's ID
            res.status(200).json({ 
                message: 'Letter sent and saved successfully!', 
                letter: { id: insertedLetterId, toName, fromName, letterContent } 
            });
        }
    });
});


// Fetch the last letter
router.get('/lastLetter', (req, res) => {
    const selectLastLetterQuery = 'SELECT * FROM letter ORDER BY id DESC LIMIT 1';
    connection.query(selectLastLetterQuery, (err, results) => {
        if (err) {
            console.error('Error fetching last letter:', err);
            res.status(500).json({ error: 'Error fetching last letter' });
        } else {
            if (results.length > 0) {
                res.status(200).json(results[0]);
            } else {
                res.status(404).json({ error: 'No letters found' });
            }
        }
    });
});

router.get('/letters', (req, res) => {
    const query = 'SELECT * FROM letter';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching letters:', err);
            return res.status(500).json({ error: 'Error fetching letters' });
        }

        res.json(results);
    });
});

module.exports = router;