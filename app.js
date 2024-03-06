import "dotenv/config";
import express from 'express';
import { generateProverb } from './lib/generateProverb.js';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.get('/proverb', async (req, res) => {
    try {
        const proverb = await generateProverb();
        res.status(200).json({ message: proverb });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default app;