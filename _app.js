// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Initialize express application
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serving static files from 'public' directory

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/download', async (req, res) => {
    const { videoUrl } = req.body;

    try {
        // Example: Downloading a video using Axios
        const response = await axios.get(videoUrl, { responseType: 'stream' });

        // Set headers for file download
        res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
        res.setHeader('Content-Type', 'video/mp4');

        // Pipe the video stream to the response object
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
