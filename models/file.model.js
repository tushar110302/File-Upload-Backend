import mongoose from "mongoose";
import nodemailer from "nodemailer"

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tags:{
        type: String,
    },
    imageUrl:{
        type: String,
    },
    email:{
        type: String,
    },
}, {timestamps: true});

fileSchema.post("save", async function (doc) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: 'tushar',
            to: doc.email,
            subject: 'Mail from Server ',
            html: `<h2>Hello </h2><p>File is uploaded</p><p>Image: <a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
            attachments: [
                {
                    filename: `image-1.jpeg`,
                    path: "public/temp/PHOTO Medium Small.jpeg"
                }
            ]
        }

        const mailResponse = await transporter.sendMail(mailOptions);
        console.log("MAIL Sent : ", mailResponse.response)
    } catch (error) {
        console.error("Error sending Mail")
    }
})

export const File = mongoose.model('File', fileSchema);