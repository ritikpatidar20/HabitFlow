const Habit = require('../models/Habit');

// Create a new habit
const createHabit = async (req, res) => {
    try {
        const habit = new Habit(req.body);
        await habit.save();
        res.status(201).send(habit);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all habits
const getHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).send(habits);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single habit by ID
const getHabitById = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
            return res.status(404).send();
        }
        res.status(200).send(habit);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a habit by ID
const updateHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!habit) {
            return res.status(404).send();
        }
        res.status(200).send(habit);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a habit by ID
const deleteHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) {
            return res.status(404).send();
        }
        res.status(200).send(habit);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createHabit,
    getHabits,
    getHabitById,
    updateHabit,
    deleteHabit
};