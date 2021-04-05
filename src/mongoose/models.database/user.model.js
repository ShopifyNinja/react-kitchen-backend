'use strict';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: { type: String, trim: true },
		email: {
			type: String,
			lowercase: true,
			unique: true,
			trim: true,
		},
		role: { type: String, trim: true },
		password: { type: String, trim: true },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('user', userSchema);
