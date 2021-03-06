import yeoman from 'yeoman-generator';
import yosay from 'yosay';
import chalk from 'chalk';

class AppGenerator extends yeoman.Base {
  constructor(...args) {
    super(...args);

    this.config.save();
  }

  prompting() {
    this.log(yosay(`The main generator of ${chalk.red('cfp-hybrid-pages')} would do nothing at the moment!`));
  }
}

export default AppGenerator;
