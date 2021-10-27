// import ora from "ora";
// import * as fs from "fs";
import { spawn, exec } from "child_process";
import type { Arguments, CommandBuilder } from "yargs";
import { ghTemplate } from "../constant";

// Create your options interface
interface Options {
  name: string;
}

const command = "new [name]";
const description = "Scaffold micro-app based on Github template repository";

const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.options({}).positional("name", { type: "string", demandOption: true });

//   var spawn = require('child_process').spawn;

// // run 'npm' command with argument 'install'
// //   storing the process in variable npmInstall
// var npmInstall = spawn('npm', ['install'], {
//   cwd: process.cwd(),
//   stdio: 'inherit'
// });

// // listen for the 'exit' event
// //   which fires when the process exits
// npmInstall.on('exit', function(code, signal) {
//   if (code === 0) {
//     // process completed successfully
//   } else {
//     // handle error
//   }
// });

/**
 *
 * TODO
 * - get spawn working
 * - Create a cli command that create a new directory based off a template [x]
 * - Add in ora loader for when github repo is being built?
 * - Colourize output. Errors: red,
 * - Add in validation for name of micro-app to follow: interactive-investor/onestack-{micro-app-name-here}
 * - Write tests for all of the above
 * - Auth for work with GH/SSH. Check if user is AUTH'd/has access to the Github organization
 * - Lock down version of gh cli to prevent breaking changes(volta?)
 */
const handler = (argv: Arguments<Options>): void => {
  const { name } = argv;
  // console.log(exec);
  // try {
  // if (!fs.existsSync(name)) {
  // process.stdout.write(`Creating ${name} new micro app`);
  // if folder exists do this

  const createGhRepo = spawn(
    `gh repo create ${name} --private --template=${ghTemplate}`,
    {
      cwd: process.cwd(),
      stdio: "inherit",
    }
  );

  // // listen for the 'exit' event
  // //   which fires when the process exits
  createGhRepo.on("exit", (code) => {
    if (code === 0) {
      // process completed successfully
      exec("y", (error, stdout, stderr) => {
        if (error) {
          console.log(`I'm an error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    } else {
      // handle error
      console.log("I'm an error");
    }
  });
};

export { command, description, builder, handler };
