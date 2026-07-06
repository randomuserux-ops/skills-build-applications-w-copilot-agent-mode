import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description: string;
  members: mongoose.Types.ObjectId[];
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    points: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Team = mongoose.model<ITeam>('Team', teamSchema);
