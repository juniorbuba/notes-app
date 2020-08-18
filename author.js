const chalk = require('chalk');
const github = 'https://github.com/juniorbuba/notes-app';
const twitter = 'https://twitter.com/web_walkerX';

const aboutMoh = function(){
    console.log(chalk.green('========================================='));
    console.log(chalk.green('The name is Moh'));
    console.log('I\'m just messing around with this package but if you like it, give a star on github');
    console.log(github);
    console.log(`Don\'t forget to follow me on twitter: ${twitter}`);
    console.log(chalk.yellow('Thanks'));
    console.log(chalk.green('========================================='));
};

module.exports = {aboutMoh:aboutMoh};