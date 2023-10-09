import userModel from "../../Model/UserModel.js";
import bcrypt from "bcrypt";
import { tokengnrt } from "./auth.js";

const validatePassword = async (userEmail, userEnteredPassword) => {
  try {
    const user = await userModel.findOne({ email: userEmail });
    const salt = user.salt;
    const storedPassword = user.password;
    const hashedEnteredPassword = await bcrypt.hash(userEnteredPassword, salt);
    if (hashedEnteredPassword === storedPassword) {
        const token=tokengnrt(user)
      return {token,isValid:true};
    }
  } catch (error) {
    console.error("Error validating password:", error);
    return {token:null,isValid:false};
  }
};

const loginCheck = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const data = await validatePassword(userEmail, userPassword);
    if (data.isValid) {
      res.status(200).json({ success: "success" ,data});
    } else {
      res.status(403).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default loginCheck;
