import mongoose from "mongoose";

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

export const File = mongoose.model('File', fileSchema);