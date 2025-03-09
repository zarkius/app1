const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/index.html', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
});

app.post('/api/v1/login', csrfProtection, (req, res) => {
  // Procesar el inicio de sesión
  res.send('Inicio de sesión exitoso');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});