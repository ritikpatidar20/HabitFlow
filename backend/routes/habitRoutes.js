const express = require('express');
const { createHabit, getHabits, getHabitById, updateHabit, deleteHabit } = require('../controllers/habitController');

const router = express.Router();

router.post('/habits', createHabit);
router.get('/habits', getHabits);
router.get('/habits/:id', getHabitById);
router.patch('/habits/:id', updateHabit);
router.delete('/habits/:id', deleteHabit);

module.exports = router;