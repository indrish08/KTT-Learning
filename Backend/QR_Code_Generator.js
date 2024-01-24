import inquirer from 'inquirer'

inquirer
  .prompt([
    {
        message: 'Type your URL: ',
        name: 'URL',
    }
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
  });
