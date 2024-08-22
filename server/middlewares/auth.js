const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

// Auth Middleware
exports.auth = async (req, res, next) => {
    try {
        // Extract token
        const token = req.cookies.token 
                        || req.body.token 
                        || req.header("Authorization")?.replace("Bearer ", "");

        // If token missing, return response
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch (err) {
            // Verification issue
            return res.status(401).json({
                success: false,
                message: 'Token is invalid',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Something went wrong while validating the token',
        });
    }
};

// IsStudent Middleware
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user?.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Students only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
}

// IsInstructor Middleware
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user?.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Instructors only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
}

// IsAdmin Middleware
exports.isAdmin = async (req, res, next) => {
    try {
        console.log("Printing AccountType ", req.user?.accountType);
        if (req.user?.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Admins only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
}
