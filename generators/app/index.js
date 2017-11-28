const Generator = require('yeoman-generator')

const templatesPath = './templates'

module.exports = class extends Generator {
  initializing() {
    const welcomeMessage = `=======================================================
+ Welcome to Paul's Easy React and Webpack generator! +
=======================================================

I\'m going to help you create a simple React 16 project!

You just have to provide some info:
`

    this.log(welcomeMessage)
  }

  prompting() {
    return this.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    },
    {
      type: 'input',
      name: 'description',
      message: 'Your project description',
      //Defaults to the project's folder name if the input is skipped
      default: ''
    },
    {
      type: 'input',
      name: 'author',
      message: 'Your name'
    },
    {
      type: 'input',
      name: 'license',
      message: 'The license for your project',
      default: 'MIT'
    }]).then((answers) => {
      this.props = answers
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(),
      { globOptions: { dot: true } }
    )
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author,
        license: this.props.license
      }
    )
    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'), {
        name: this.props.name
      }
    )
  }
};