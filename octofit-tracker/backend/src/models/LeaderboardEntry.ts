import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  team: mongoose.Types.ObjectId;
  score: number;
  rank?: number;
  createdAt: Date;
  updatedAt: Date;
}

const leaderboardEntrySchema = new Schema<ILeaderboardEntry>(
  {
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    score: { type: Number, required: true, default: 0 },
    rank: { type: Number, min: 1 },
  },
  { timestamps: true },
);

export const LeaderboardEntry = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);
