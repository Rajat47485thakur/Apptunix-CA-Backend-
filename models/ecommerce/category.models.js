import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requried: true
        }
    }, { timestampes: true })


export const Category = mongoose.model("Category", categorySchema);