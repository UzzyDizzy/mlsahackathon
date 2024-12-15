const express = require('express');
const jwt = require('jsonwebtoken');
const Alert = require('../models/Alert');
const { JWT_SECRET } = process.env;
const router = express.Router();

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

router.post('/alert', authenticate, async (req, res) => {
  try {
    const alert = new Alert({ message: req.body.alertMessage, user: req.user.id });
    await alert.save();
    res.status(201).json({ message: 'Alert posted successfully' });
  } catch {
    res.status(500).json({ error: 'Error posting alert' });
  }
});

router.post('/broadcast', authenticate, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  // Broadcasting logic here
  res.json({ message: 'Broadcast sent successfully' });
});

module.exports = router;
