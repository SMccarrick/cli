// Importing types
import type { Arguments, CommandBuilder } from "yargs";

// Create your options interface
interface Options {
  name: string;
  upper?: boolean;
}

export const command = "greet <name>";
export const description = "Greet <name> with hello";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: "boolean" },
    })
    .positional("name", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { name, upper } = argv;
  const greeting = `Hello, ${name}!`;
  process.stdout.write(upper ? greeting.toUpperCase() : greeting);
  process.exit(0);
};
