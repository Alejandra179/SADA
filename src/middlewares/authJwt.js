const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");

const middlewares = {
  verifyToken: async (req, res, next) => {
    try {
      const token = await req.headers.authentication;
      if (!token) {
        return res.status(403).json({ message: "No existe ningun token" });
      } else {
        const decoded = jwt.verify(token, config.SECRET);
        const user = await User.findById(decoded.id);
        if (!user)
          return res.status(404).json({ message: "este usuario no existe" });
        next();
      }
    } catch (error) {
      return res.status(401).json({ message: "no autorizado " });
    }
  },
};

module.exports = middlewares;
