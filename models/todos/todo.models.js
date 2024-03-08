import mongoose from mongoose

const todoSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }, { timestamps: true }
)
export const Todo = mongoose.model("Todo", todoSchema);