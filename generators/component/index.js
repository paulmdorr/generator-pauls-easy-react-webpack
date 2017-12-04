const Generator = require('yeoman-generator')
const remove = require('remove')

const templatesPath = './templates'

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Component name'
    },
    {
      type: 'list',
      name: 'compOrScene',
      message: 'Do you need a component or a scene?',
      default: 0,
      choices: ['component', 'scene']
    }]).then((answers) => {
      this.props = answers
    });
  }

  writing() {
    const baseDir = 'src/' + (this.props.compOrScene === 0 ? 'components/' : 'scenes/')
    const dir = baseDir + this.props.name + '/'
    // Copying all the templates
    this.fs.copy(
      this.templatePath('final'),
      this.destinationPath(dir),
      { globOptions: { dot: true } }
    )
    // Copying templates with placeholders
    this.fs.copyTpl(
      this.templatePath('placeholders/Component.jsx'),
      this.destinationPath(dir + this.props.name + '.jsx'), {
        name: this.props.name
      }
    )
  }
};