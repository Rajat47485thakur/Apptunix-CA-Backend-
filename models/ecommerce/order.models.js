import mongoose from "mongoose"

const orderItmeSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        requried: true
    }
})

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            requried: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        orderItmes: {
            type: [orderItmeSchema]
        },
        address: {
            type: String,
            required: true
        },
        status:{
            type:String,
            enum:["PENDING","CANCELLED","DELIVERED"],
            default:"PENDING"
        }
    }, { timestamps: true }
)

export const Order = mongoose.model("Order", orderSchema);