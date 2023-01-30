const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: "2h" });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },

  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: "2h" });
  },

  authenticateJwt: async (req, res, next) => {
    let decodedJwt;
    try {
      decodedJwt = await jwt.verify(
        req.cookies.usertoken,
        process.env.SECRET_KEY
      );
      req.body.user_id = decodedJwt.id;
      console.log("Success! Decoded JWT: ", decodedJwt);
      next();
    } catch (error) {
      console.log("Token Error!", error);
      res
        .status(400)
        .json({ error: "You must be logged in to add a new shoe." });
      return;
    }
  },
};
