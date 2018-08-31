#!/usr/bin/env node
'use strict';

const fs = require('fs');
const ejs = require('ejs');
const chalk = require('chalk');
const meow = require('meow');

const cli = meow(`
	Usage
	  $ ng-cli <appName>
`, {});

console.log(__dirname)
const templatesDir = fs.readdirSync(__dirname + '/templates');

let component = {
   name: cli.input[0].toLowerCase(),
   Name: cli.input[0].charAt(0).toUpperCase() + cli.input[0].substr(1).toLowerCase()
};

console.log(chalk.white.bgRed('AngularJS Material'), chalk.white.bgBlue('TypeScript'), chalk.white.bgRed(' application generator!'));


if (fs.existsSync('src/app/' + component.name)) {
   console.log(chalk.white.bgRed('Component directory exist!'));
   process.exit();
}

fs.mkdirSync('./src/app/' + component.name);

for (let i = 0; i < templatesDir.length; i++) {
   const template = fs.readFileSync(__dirname + '/templates/' + templatesDir[i], 'utf8')
   let resultFileData = ejs.render(template, { component: component });
   let fileType = '';

   switch (templatesDir[i]) {
      case 'module.ts':
         fileType = '.module.ts';
         break;
      case 'component.ts':
         fileType = '.ts';
         break;
      case 'routes.ts':
         fileType = '.routes.ts';
         break;
      case 'service.ts':
         fileType = '.service.ts';
         break;
      case 'template.html':
         fileType = '.html';
         break;
   }
   console.log(chalk.white.bgRed('Creating ' + component.name + fileType));
   fs.writeFileSync('src/app/' + component.name + '/' + component.name + fileType, resultFileData);
   console.log(chalk.white.bgBlue('Complete! '))
}

