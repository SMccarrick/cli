#!/usr/bin/env node

// The above line converts the files into a node.js command line script

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir("commands")
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: "help" }).argv;