'use strict';
import mongoose from 'mongoose';
import 'dotenv/config.js';

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

mongoose
	.connect(
		`mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@cluster0.rborb.mongodb.net/${DATABASE_NAME}`,
		{
			useNewUrlParser: true,
		}
	)
	.then(() => {
		console.log(`connected to db`);
	})
	.catch((error) => {
		console.log('Error === ', error);
	});

export default mongoose.connection;
