import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

inquirer
  .prompt([
    {
      message: 'Type your URL: ',
      name: 'URL',
    },
    // {
    //     message: 'Type the Website name: ',
    //     name: 'Name',
    // },
  ])
  .then((answers) => {
    // console.log(answers);

    var qr_png = qr.image(answers.URL);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('URL.txt', answers.URL, function(err){
      if(err) throw err;
      console.log('File saved!');
    });
  })
  .catch((error) => {
    console.log(error);
  });
