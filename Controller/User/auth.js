import jwt from "jsonwebtoken";

const secretKey = process.env.SECURITYKEY;

export const tokengnrt = (user) => {
  const payload = {
    userId: user._id,
    email: user.email,
  };
  try {
    return jwt.sign(payload, secretKey, { expiresIn: "100s" });
  } catch (error) {
    throw error;
  }
};

export const tokenAuth = (req, res, next) => {
  try {
    let bearerToken = req.headers["authorizations"];
    if (bearerToken !== undefined && bearerToken !== "") {
      bearerToken = bearerToken.split(":");
      if (bearerToken.length == 1) {
        res.status(403).send({ message: "Token is invalid" });
      } else {
        bearerToken = bearerToken[1];
        let verifyData = verifyToken(bearerToken);
        if (verifyData !== null && verifyData !== undefined) {
          next();
        } else {
          res.status(403).send({ message: "Token is invalid" });
        }
      }
    } else {
      res.status(403).send({ message: "Invalid authorization" });
    }
  } catch (error) {
    res.status(403).send({ message: error });
  }
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey, (err, auth) => {
    if (err) {
      throw err;
    } else {
      return auth;
    }
  });
};
