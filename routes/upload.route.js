import { Router } from "express";
import { cloudImageUpload, cloudVideoUpload, localFileUpload } from "../controllers/upload.controller.js";
import { upload } from "../utils/multer.js";

const uploadRouter = Router();

uploadRouter.route('/local-file-upload').post(upload.single("image") ,localFileUpload)
uploadRouter.route('/cloud-image-upload').post(upload.single("cimage") ,cloudImageUpload)
uploadRouter.route('/cloud-video-upload').post((req, res, next) => {
    upload.single('cvideo')(req, res, (err) => {
      if (err) {
        // Handle file size error
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).send({ message: 'File size exceeds the limit of 2MB' });
        }
        // Handle other errors
        return res.status(500).send({ message: 'File upload failed', error: err.message });
      }
      // Call the next middleware if no errors
      next();
    });
  } ,cloudVideoUpload)

export {uploadRouter};