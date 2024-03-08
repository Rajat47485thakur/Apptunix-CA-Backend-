import mongoose from "mongoose"
const productSchema = new mongoose.Schema(
    {
        discription: {
            type: String,
            requried: true,

        },
        name: {
            type: String,
            required: true
        },
        productImage: {
            type: String
        },
        price: {
            type: Number,
            require: true,
            default: 0
        },

        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            requried: true,

        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, { timestamps: true }
)

export const Product = mongoose.model("Product", productSchema)