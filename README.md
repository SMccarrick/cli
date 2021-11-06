# A simple cli for building a repo off a Github template

## Goal

To create a wrapper that allows you to simplify the creation of a Github repository based on a template from an organisation.

## Technology

- Node JS: the javascript runtime to help us build out of cli
- Typescript: type safe javascript
- Yargs: helps with building out our cli with node js
- Chalk: cli colouring to spice up our cli tool
- GH cli: gives us the ability to interact with Github from the comfort of our terminal
- Volta: lock down the version of our tooling such as the GH cli to prevent up ticks that may break our cli wrapper

## Plan

- Build a setup wizard for gh cli
- Auth into gh cli
- Flexible params so anyone can customise the command based on their project needs(Cli name, Template and organisation)
- Ability to export cli into a package based on the configuration provided



