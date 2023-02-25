import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
});

app.get('/api', async(req, res) => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data from api')
    }
})