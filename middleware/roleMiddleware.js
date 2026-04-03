const User = require("../models/User");

const checkRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const role = req.headers.role;
      const email = req.headers.email;

      if (!role || !email) {
        return res.status(400).json({
          message: "Role and email required in headers",
        });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // ✅ STATUS CHECK
      if (user.status === "inactive") {
        return res.status(403).json({
          message: "User is inactive",
        });
      }

      // ✅ ROLE CHECK
      if (!allowedRoles.includes(role)) {
        return res.status(403).json({
          message: "Access Denied",
        });
      }

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
};

module.exports = checkRole;