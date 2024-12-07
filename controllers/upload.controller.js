import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { File } from "../models/file.model.js";

const localFileUpload = async (req, res) => {
    try {
        const localPath = req.file.path;
        if(!localPath){
            return res.status(400).json({
                success: false,
                message: "No File Available"
            })
        }
        return res.status(200).json({
            success: true,
            message: "File uploaded on server",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Could not upload on Server"
        })
    }
}
const cloudImageUpload = async (req, res) => {
    try {
        const {name, tags, email} = req.body;
        const uploadFilePath = req.file.path;
        const validTypes = ['jpeg', 'jpg', 'png'];

        if(!validTypes.includes(uploadFilePath.split('.')[1].toLowerCase())){
            return res.status(400).json({
                success: false,
                message: "Unsupported File type"
            })
        }

        const cloudUrl = await uploadOnCloudinary(uploadFilePath);
        // console.log(cloudUrl.url);

        const file = await File.create({
            name,
            email,
            tags,
            imageUrl: cloudUrl.url
        })

        return res.status(200).json({
            success: true,
            message: "Seccessfully uploaded on Cloudinary",
            data: file
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Could not upload on Cloudinary"
        })
    }
}

const cloudVideoUpload = async (req, res) => {
    try {
        const {name, tags, email} = req.body;
        const uploadFilePath = req.file.path;
        const validTypes = ['mp4', 'mov'];

        if(!validTypes.includes(uploadFilePath.split('.')[1].toLowerCase())){
            return res.status(400).json({
                success: false,
                message: "Unsupported File type"
            })
        }

        const cloudUrl = await uploadOnCloudinary(uploadFilePath);
        // console.log(cloudUrl.url);

        const file = await File.create({
            name,
            email,
            tags,
            imageUrl: cloudUrl.url
        })

        return res.status(200).json({
            success: true,
            message: "Seccessfully uploaded Video on Cloudinary",
            data: file
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Could not upload on Cloudinary"
        })
    }
}
const compressUpload = async (req, res) => {
    try {
        const {name, tags, email} = req.body;
        const uploadFilePath = req.file.path;
        const validTypes = ['mp4', 'mov'];

        if(!validTypes.includes(uploadFilePath.split('.')[1].toLowerCase())){
            return res.status(400).json({
                success: false,
                message: "Unsupported File type"
            })
        }

        const cloudUrl = await uploadOnCloudinary(uploadFilePath);
        // console.log(cloudUrl.url);

        const file = await File.create({
            name,
            email,
            tags,
            imageUrl: cloudUrl.url
        })

        return res.status(200).json({
            success: true,
            message: "Seccessfully uploaded Video on Cloudinary",
            data: file
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Could not upload on Cloudinary"
        })
    }
}
export {localFileUpload, cloudImageUpload, cloudVideoUpload}