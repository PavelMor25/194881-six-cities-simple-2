import TsvFileReader from '../common/file-reader/tsv-file-reader.js';
import CliCommandInterface from './cli-command.interface.js';
import chalk from 'chalk';

const outputColor = chalk.red;

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  public execute(fileName: string): void {
    const fileReader = new TsvFileReader(fileName.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch(err) {

      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(outputColor(`Не удалось импортировать данные из файла по причине: «${err.message}»`));
    }
  }

}
