import jwt from "jsonwebtoken";

const verifyTokens = (req, res, next) => {
  let accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken)
    return res.status(401).json({
      err: 1,
      msg: "Missing access token",
    });
  jwt.verify(accessToken, process.env.TOKEN_SECRET_KEY, (err, user) => {
    if (err)
      return res.status(401).json({
        err: 1,
        msg: "Access token expired",
      });
    req.user = user;
    next();
  });
};

const isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role === 0 && role !== 1)
    return res.status(401).json({
      err: 1,
      msg: "Require admin role",
    });
  next();
};

module.exports = { verifyTokens, isAdmin };
