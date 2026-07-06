"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const Activity_1 = require("../models/Activity");
const LeaderboardEntry_1 = require("../models/LeaderboardEntry");
const Team_1 = require("../models/Team");
const User_1 = require("../models/User");
const Workout_1 = require("../models/Workout");
dotenv_1.default.config();
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            User_1.User.deleteMany({}),
            Team_1.Team.deleteMany({}),
            Activity_1.Activity.deleteMany({}),
            LeaderboardEntry_1.LeaderboardEntry.deleteMany({}),
            Workout_1.Workout.deleteMany({}),
        ]);
        const teamA = await Team_1.Team.create({
            name: 'The Pulse Squad',
            description: 'High-energy runners and cyclists',
            points: 120,
        });
        const teamB = await Team_1.Team.create({
            name: 'Iron Harbor',
            description: 'Strength-first training group',
            points: 95,
        });
        const users = await User_1.User.insertMany([
            { name: 'Ava Chen', email: 'ava@example.com', fitnessGoal: 'Run a 10K', team: teamA._id },
            { name: 'Marcus Reed', email: 'marcus@example.com', fitnessGoal: 'Increase strength', team: teamB._id },
            { name: 'Sofia Patel', email: 'sofia@example.com', fitnessGoal: 'Improve mobility', team: teamA._id },
        ]);
        await Team_1.Team.updateMany({}, { $set: { members: users.map((user) => user._id) } });
        await Activity_1.Activity.insertMany([
            { user: users[0]._id, type: 'Run', durationMinutes: 35, caloriesBurned: 420, distanceMiles: 4.2, notes: 'Tempo run' },
            { user: users[1]._id, type: 'Strength', durationMinutes: 50, caloriesBurned: 510, notes: 'Upper body' },
            { user: users[2]._id, type: 'Yoga', durationMinutes: 30, caloriesBurned: 180, notes: 'Mobility flow' },
        ]);
        await LeaderboardEntry_1.LeaderboardEntry.insertMany([
            { team: teamA._id, score: 120, rank: 1 },
            { team: teamB._id, score: 95, rank: 2 },
        ]);
        await Workout_1.Workout.insertMany([
            {
                title: 'Power Intervals',
                description: 'Short, intense intervals to build cardio endurance.',
                difficulty: 'Intermediate',
                durationMinutes: 25,
                targetMuscleGroups: ['legs', 'cardio'],
                equipment: ['timer'],
            },
            {
                title: 'Full Body Strength',
                description: 'A balanced strength circuit for full body conditioning.',
                difficulty: 'Beginner',
                durationMinutes: 40,
                targetMuscleGroups: ['full body'],
                equipment: ['dumbbells', 'mat'],
            },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
