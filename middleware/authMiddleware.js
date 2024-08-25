const jwt = require('jsonwebtoken');
const JWT_SECERET = process.env.JWT_SECERET;

//Verifying Token
const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log("authHeader:", authHeader);
  console.log("Secret is", JWT_SECERET);

  if (authHeader) {
    const token = authHeader.split(' ').pop();

    if (!token) {
      return res.status(401).send({ error: "No token provided" });
    }

    // Verify the token
    jwt.verify(token, JWT_SECERET, (err, decoded) => {
      if (err) {
        console.error("Token verification error:", err)
        return res.status(401).send({ error: "Token not valid" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({ error: "No token provided" });
  }
};

module.exports = verifyToken;
