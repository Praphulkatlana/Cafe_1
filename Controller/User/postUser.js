import userModel from "../../Model/UserModel.js";
import bcrypt from "bcrypt";


const hashingPassword = async (userPassword) => {
  try {
    let salt = await gnrtSalt();
    if (!salt) {
      return null;
    }
    const hashedPassword = bcrypt.hashSync(userPassword,salt);
    return [hashedPassword, salt];
  } catch (error) {
    return null;
  }
};

const gnrtSalt = async () => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    });
  });
};

const postUser = async (req, res) => {
  const userBody = req.body;
  const hashedPassword = await hashingPassword(userBody.password);
  try {
    if (hashedPassword == null) {
      throw "Error while hashing password";
    }
    userBody.password = hashedPassword[0];
    userBody.salt = hashedPassword[1];
    let newUser = new userModel(userBody);
    newUser = await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default postUser;
