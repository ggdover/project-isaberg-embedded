# READ ME - Project Isaberg

This project is part of a course at Jönköping University. The project involves developing a bike rental service. This repository holds the embedded software that are written for a ruuvitag running a espruino interpreter.
Following is a developers guide on how to get setup.

## Technologies and their versions

- npm v5.0.3
- node v6.9.5
- espruino v1.96.51 (Flashed onto the ruuvitag)
- jasmine v3.1.0

## Prerequisite

Before developing you need to have Node.js and npm installed on your computer. You also want to install the espruino cli from npm to be able to upload the javascript code to the ruuvi tag from the terminal. Type `npm install -g espruino`
in a terminal to do this. Pay attention that you need to have both Node.js and npm installed for this to work. 

Lastly you want to run `npm install` in the terminal when standing the root of the project. This will install any node packages listed in the package.json file. Unlike the espruino cli that is installed globally (by using the -g option), the **dependencies** in package.json will be installed locally for the project and are located in the 'node_modules' directory that is generated in the project's root. To clean the project from node_modules, you can simply delete the node_modules folder or enter `git clean -fdx` in the terminal.

## Developing

All the source code is written in Javascript and should be located in the src folder.
`src/main.js` is the entry point for the application. The `src/main.js` should import code from other files inorder to keep the code clean and not end up with one big spagetthi code. `src/functions.js` shows a example on how you can create code in a seperate file, in the form of functions that can be imported to `main.js`. The code that are written in `src/functions.js` are testable, and so will any other .js files code be, if they are using the conventions shown in `src/functions.js`.

## Building

Assuming you have installed the espruino cli , the source code is built and uploaded to the ruuvitag in the same step using espruino cli. This is a example of what to write into the terminal to build and upload to the ruuvitag: `espruino -p f7:ea:1b:ee:5a:5f src/main.js`. Following the `-p` is the mac-address of the ruuvitag. This is not necessarily required, but will make uploading successfully more consistent. End of the command `src/main.js` is the target path for the source code.

To find more information on using the espruino cli you can type `espruino --help` into the terminal.

If you're still having alot of trouble with upload , you can upload code using the [espruino web-ide](https://www.espruino.com/ide/).

## Unittests

Unittests are written using a javascript based framework called Jasmine. The unittests are located in `spec/tests` and the example unittest shows how one can be written. `spec/support/jasmine.json` is a config file for jasmine that lets you set several options like: filepath for the unittests. To run the tests, enter `npm test` in the terminal.

To understand more about how Jasmine works and how to use it [click here](https://jasmine.github.io/setup/nodejs.html)