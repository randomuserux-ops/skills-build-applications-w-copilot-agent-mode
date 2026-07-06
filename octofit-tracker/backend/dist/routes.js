"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("./models/User");
const Team_1 = require("./models/Team");
const Activity_1 = require("./models/Activity");
const LeaderboardEntry_1 = require("./models/LeaderboardEntry");
const Workout_1 = require("./models/Workout");
const router = (0, express_1.Router)();
router.get('/api/users', async (_req, res) => {
    const users = await User_1.User.find().populate('team');
    res.json(users);
});
router.post('/api/users', async (req, res) => {
    const user = await User_1.User.create(req.body);
    res.status(201).json(user);
});
router.get('/api/teams', async (_req, res) => {
    const teams = await Team_1.Team.find().populate('members');
    res.json(teams);
});
router.post('/api/teams', async (req, res) => {
    const team = await Team_1.Team.create(req.body);
    res.status(201).json(team);
});
router.get('/api/activities', async (_req, res) => {
    const activities = await Activity_1.Activity.find().populate('user');
    res.json(activities);
});
router.post('/api/activities', async (req, res) => {
    const activity = await Activity_1.Activity.create(req.body);
    res.status(201).json(activity);
});
router.get('/api/leaderboard', async (_req, res) => {
    const leaderboard = await LeaderboardEntry_1.LeaderboardEntry.find().populate('team').sort({ score: -1 });
    res.json(leaderboard);
});
router.post('/api/leaderboard', async (req, res) => {
    const entry = await LeaderboardEntry_1.LeaderboardEntry.create(req.body);
    res.status(201).json(entry);
});
router.get('/api/workouts', async (_req, res) => {
    const workouts = await Workout_1.Workout.find();
    res.json(workouts);
});
router.post('/api/workouts', async (req, res) => {
    const workout = await Workout_1.Workout.create(req.body);
    res.status(201).json(workout);
});
exports.default = router;
