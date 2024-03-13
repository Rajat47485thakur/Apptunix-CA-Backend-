import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    //get user details form frontend (using the postman)
    //validation - not empty
    //chack if user already exists -- :username and email
    //check for images chaks for avatar 
    // upload them on cloudinary, avatar check 
    // create user object - create entry in db 
    //remover password and refresh token field from response  
    // check for user creation 
    //return response 


    const { fullName, email, username, password } = req.body
    console.log(fullName);

    /*if (fullName ===""){
        throw new ApiError(400, "Full Name is requried") 
    }  or we can use some method */
    if (
        [fullName, email, username, password].some((field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All fields are requried")
    }
    const existesUer = User.findOne({
        $or: [{ email }, { username }] // this is use to set validation that the  username or email should be unique to register
    })
    if (existesUer) {
        throw new ApiError(409, "User with email or username already exists")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is requried")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Avatar file is requried")
    }


    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500, "Somthing went wrong while registering the user")
    }

    {// here why we create the ApiResponse.js file and make that res constant.
        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered Successfully")
        )
    }
})

export { registerUser }

