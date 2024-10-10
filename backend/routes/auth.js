const jwt = require("jsonwebtoken");

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "Authentication token required" });

  jwt.verify(token, "AshuTM", (err, user) => {
    if (err) return res.status(403).json(err); // If token is invalid, return Forbidden
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = { authenticateToken };
