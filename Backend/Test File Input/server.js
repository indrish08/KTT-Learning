const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(fileUpload());

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  
  console.log(req.files.fileInput);
  const uploadedFiles = req.files.fileInput;

  if(Array.isArray(uploadedFiles)){
    uploadedFiles.forEach((uploadedFile) => {
      uploadedFile.mv(path.join(__dirname, 'uploads', uploadedFile.name))
    })
  }else{
    uploadedFiles.mv(path.join(__dirname, 'uploads', uploadedFiles.name))
  }


  res.send('File uploaded successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
