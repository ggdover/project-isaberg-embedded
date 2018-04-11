# READ ME - Project Isaberg

This project is part of a course at Jönköping University. The project involves developing a bike rental service. This repository holds the embedded software that are written for a ruuvitag running a espruino interpreter.
Following is a developers guide on how to get setup.

## Technologies and their versions

- npm v5.0.3
- node v6.9.5
- espruino v1.96.51 (Flashed onto the ruuvitag)

## Prerequisite

Before developing you need to have Node.js and npm installed on your computer. You also want to install the espruino cli from npm to be able to upload the javascript code to the ruuvi tag from the terminal. Type `npm install -g espruino`
in a terminal to do this. Pay attention that you need to have both Node.js and npm installed for this to work.

## Developing

All the source code is written in Javascript and should be located in the src folder. Currently all source code is written in one file: src/main.js. Ability to divide the code into multiple different files, so the code can be more component based rather than having all code in one place, is currently being looked into.

## Building

Assuming you have installed the espruino cli , the source code is built and uploaded to the ruuvitag in the same step using espruino cli. This is a example of what to write into the terminal to build and upload to the ruuvitag: `espruino -p f7:ea:1b:ee:5a:5f src/main.js`. Following the `-p` is the mac-address of the ruuvitag. This is not necessarily required, but will make uploading successfully more consistent. End of the command `src/main.js` is the target path for the source code.

To find more information on using the espruino cli you can type `espruino --help` into the terminal.

If you're still having alot of trouble with upload , you can upload code using the [espruino web-ide](https://www.espruino.com/ide/).

## Unittests

COMING SOON!!