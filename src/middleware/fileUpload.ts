import multer, { StorageEngine } from 'multer';
import { Request } from 'express';
import path from 'path';
import fs from 'fs';

// Ensure the upload directory exists
const uploadDir = 'upload/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up storage for uploaded file
const storage: StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        console.log(file);
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Creating instance of multer
const upload = multer({ storage: storage });

export default upload;
