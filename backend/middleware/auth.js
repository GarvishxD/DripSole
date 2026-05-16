const jwt = require('jsonwebtoken');

const User = require('../models/User');

const JWT_SECRET =
  process.env.JWT_SECRET || 'dripsole_secret';

const authenticateToken = async (req, res, next) => {

  try {

    const authHeader = req.header('Authorization');

    if (!authHeader) {
      return res.status(401).json({
        message: 'No token provided'
      });
    }

    const token = authHeader.replace('Bearer ', '');

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    const user = await User.findById(
      decoded.userId
    );

    if (!user) {
      return res.status(401).json({
        message: 'User not found'
      });
    }

    req.user = user;

    next();

  } catch (error) {

    console.log(error);

    res.status(401).json({
      message: 'Invalid token'
    });
  }
};

const adminAuth = (req, res, next) => {

  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({
      message: 'Admin only'
    });
  }

  next();
};

module.exports = {
  authenticateToken,
  adminAuth,
  JWT_SECRET
};