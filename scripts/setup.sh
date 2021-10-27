#!/bin/bash

checkGHInstall () {
  # Check if gh li is installed
  which -s gh

  # If Homebrew is available update & gh cli is NOT installed run the below
  if [[ $? != 0 ]] ; then
    brew update
    brew install gh
  else
  echo "You have Homebrew & gh cli installed, you're all setup!"
  fi
}

# Check if homebrew is available
which -s brew

if [[ $? != 0 ]] ; then
  # Install Homebrew if its not available
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  checkGHInstall
else
  checkGHInstall
fi