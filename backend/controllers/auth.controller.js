import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: "Username already exists" });
        }

        //Hash password

        const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        
        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlsProfilePic,
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req, res) => {
    console.log("Login user");
}

export const logout = async (req, res) => {
    console.log("Logout user");
}