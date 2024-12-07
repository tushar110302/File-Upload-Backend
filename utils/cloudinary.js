import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localPath) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(localPath, {
            folder: "Server Uploads",
            quality: 40,
            resource_type:'auto'
        })
        // console.log(uploadResult);
        fs.unlinkSync(localPath);
        return uploadResult;

    } catch (error) {
        fs.unlinkSync(localPath);
        console.log(error);
        return null;
    }
    
}
