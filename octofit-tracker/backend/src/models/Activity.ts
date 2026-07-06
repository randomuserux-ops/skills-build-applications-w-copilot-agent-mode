import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  user: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  distanceMiles?: number;
  notes?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    distanceMiles: { type: Number, min: 0 },
    notes: { type: String, trim: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
