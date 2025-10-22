const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("🧠 Cookies received:", req.cookies);
  const token = req.cookies?.token;

  if (!token) {
    console.log("❌ No token found");
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId };
    console.log("✅ Token verified for user:", decoded.userId);
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
