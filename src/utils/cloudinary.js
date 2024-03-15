import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_COLUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" })
        //file has been uploaded successfully
        // console.log('Upload to Cloudinary Successful', response.url);
        fs.unlinkSync(localFilePath)//delete local copy of the image after it's been uploaded.
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);//delete local saved file after error in uploading  it to clodinary 
        return null
    }
}


export { uploadOnCloudinary };