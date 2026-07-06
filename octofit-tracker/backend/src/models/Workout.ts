import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  description: string;
  difficulty: string;
  durationMinutes: number;
  targetMuscleGroups: string[];
  equipment: string[];
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 10 },
    targetMuscleGroups: [{ type: String, trim: true }],
    equipment: [{ type: String, trim: true }],
  },
  { timestamps: true },
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
