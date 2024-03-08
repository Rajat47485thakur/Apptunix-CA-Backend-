import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true }); // it gives us two fildes CreatedAt and UpdatedAT 

export const User = mongoose.model("User", userSchema);