const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'tour-management',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

module.exports = storage;