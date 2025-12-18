require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./auth/auth.routes'));
app.use('/api/leads', require('./modules/leads/leads.routes'));
// Add other routes later: /dashboard, /analytics, /sales, /content, /settings
// Placeholder routes for testing
app.get('/dashboard', (req, res) => {
  res.send('This is the Dashboard endpoint.');
});

app.get('/analytics', (req, res) => {
  res.send('This is the Analytics endpoint.');
});

app.get('/sales', (req, res) => {
  res.send('This is the Sales endpoint.');
});

app.get('/content', (req, res) => {
  res.send('This is the Content endpoint.');
});

app.get('/settings', (req, res) => {
  res.send('This is the Settings endpoint.');
});


// Root route to avoid "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Backend is running! Welcome to the dashboard API.');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
