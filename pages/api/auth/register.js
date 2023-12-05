import { connectDB } from '../../../util/mongo';
import User from '../../../model/User';
import bcrypt from 'bcrypt';
export default async (req, res) => {
  if (req.method.toLowerCase() === 'post') {
    const { email, password, confirmPwd } = req.body;
    if (!email || !email.includes('@') || !password || !confirmPwd) {
      res.status(401).json({ success:false,message: 'Validation Error' });
      return;
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await connectDB();
      const existUser = await User.findOne({ email });
      if (!existUser) {
        const newUser = await User({ email, password: hashedPassword });
        newUser.save();
        res.status(200).json({success: true, message:"Sign up successfully! Go to login." });
      } else {
        res.status(200).json({ success: false, message: 'Email already registered.' });
      }
    } catch (error) {
      console.info(error);
      res.status(500).json(error);
    }
  }

  return;
};
