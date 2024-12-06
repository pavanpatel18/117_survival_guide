const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'The History of the Internet' });
});

// Example route for additional pages
app.get('/git', (req, res) => {
    res.render('git', { title: 'Git - The History of the Internet' });
});

app.get('/linux', (req, res) => {
    res.render('linux', { title: 'Linux - The History of the Internet' });
});

app.get('/pre_internet', (req, res) => {
    res.render('pre_internet', { title: 'Pre-Internet: Key Figures and Concepts' });
});

app.get('/internet_development', (req, res) => {
    res.render('internet_development', { title: 'Internet Development - The History of the Internet' });
});

app.get('/web_1_0', (req, res) => {
    res.render('web_1_0', { title: 'Early Web - The History of the Internet' });
});

app.get('/web_2_0', (req, res) => {
    res.render('web_2_0', { title: 'Current Web - The History of the Internet' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
