export default interface CliCommandInterface {
  readonly name: string;
  execute(...parametrs: string[]): void;
}
