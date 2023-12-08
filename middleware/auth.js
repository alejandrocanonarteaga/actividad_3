// middleware/auth.js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: 'Token inválido' });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Token no proporcionado' });
  }
};

module.exports = { requireAuth };
