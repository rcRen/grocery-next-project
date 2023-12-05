import { connectDB } from '../../../util/mongo';
import User from '../../../model/User';
import bcrypt from 'bcrypt';

export default async (req, res) => {
  const { email, password } = req.body;
  let success = false;
  if (req.method != 'POST') {
    return res.status(404).json({ success, message: 'Method not found.' });
  }

  if (!email || !email.includes('@') || !password) {
    return res.status(401).json({ success, message: 'Please provide valid email and password.' });
  }

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    const validPassword = await bcrypt.compare(password, userFound.password);
    if (!validPassword) {
      res.status(200).json({ success, message: 'Password and email are not matched.' });
    } else {
      success = true;
      res.status(200).json({ success, message: 'login success' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
