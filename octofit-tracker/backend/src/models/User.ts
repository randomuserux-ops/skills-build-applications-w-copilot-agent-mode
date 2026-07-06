import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  fitnessGoal: string;
  team?: mongoose.Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    fitnessGoal: { type: String, required: true, trim: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
  },
  { timestamps: true },
);

export const User = mongoose.model<IUser>('User', userSchema);
