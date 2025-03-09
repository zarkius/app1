const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const apiRouter = require('./api/v1/api');

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', csrfProtection, apiRouter);

app.get('/index.html', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

const router = express.Router();

// Mock user data
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Endpoint to handle login requests
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate user credentials
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Return success response
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    // Return failure response
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
