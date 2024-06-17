// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Initialize express application
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to handle video download
app.post('/download', async (req, res) => {
    const { videoUrl } = req.body;

    try {
        // Fetch the video file from the provided URL
        const response = await axios.get(videoUrl, { responseType: 'stream' });

        // Set response headers for file download
        res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
        res.setHeader('Content-Type', 'video/mp4');

        // Pipe the video stream to the response
        response.data.pipe(res);
    } catch (error) {
        console.error('Error downloading video:', error);
        res.status(500).send('Error downloading video');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
