const Generator = require('yeoman-generator')
const remove = require('remove')

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
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'What package manager would you like to use?',
      default: 1,
      choices: ['npm', 'yarn']
    },
    {
      type: 'confirm',
      name: 'start',
      message: 'If this directory has files, I\'m going to remove all of them, are you sure?',
      default: true
    }]).then((answers) => {
      if (!answers.start) {
        this.log('\nExiting the generator...\n')
        //Not sure if this is the best way of cancelling the generator
        process.exit(0)
      }
      this.props = answers
    });
  }

  writing() {
    // Removing files in destination
    // TODO: ignoring errors because it was working but throwing busy errors anyway.
    //       I will pobably change it by this.fs.delete() if they fix it.
    remove.removeSync(this.destinationPath('./'), {
      ignoreErrors: true
    })
    // Copying all the templates
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(),
      { globOptions: { dot: true } }
    )
    // Copying templates with placeholders
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name.replace(/\s/gi, '-').toLowerCase(),
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

  install() {
    const useNmp = this.props.packageManager === 0
    this.installDependencies({
      npm: useNmp,
      bower: false,
      yarn: !useNmp
    })
  }
};