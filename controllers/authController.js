const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { userName, userEmail, password, role } = req.body; // Include role
    console.log(req.body);

    if (!userName || !userEmail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: userName,
      email: userEmail,
      password: hashedPassword,
      role: role === "admin" ? "admin" : "student", // Ensure only valid roles
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Registration error", error });
  }
};

exports.login = async (req, res) => {
    try {
      const { userEmail, password } = req.body;
      const user = await User.findOne({ email: userEmail }); // Use email
  
      if (!user) return res.status(400).json({ message: "User not found" });
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(400).json({ message: "Invalid credentials" });
  
      // Sign JWT with all necessary user info
      const token = jwt.sign(
        {
          userId: user._id,
          name: user.name, // Use correct field
          email: user.email, // Use correct field
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );
  
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          token,
          user: {
            _id: user._id,
            name: user.name, // Corrected field
            email: user.email, // Corrected field
            role: user.role,
          },
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Login error", error });
    }
  };
  
