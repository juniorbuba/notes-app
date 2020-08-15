# Notes-app 
![image of note and pen](note.jpg)

A small ```Nodejs``` application that allows the user take notes using the Commmand Line Interface.

The only required external node modules needed are ```yargs``` and ```chalk```. To run this application, clone this repository and run ```npm install``` to install the required dependencies.

Available commands to use ```notes-app``` are: ```add```, ```delete```, ```list```, ```read```, ```version``` & ```help```

# Usage

* ```add```

-Requires two flags, ```--title``` and ```--body```

Example: node app add --title='Coding' --body='Refactor all functions to arrow functions'

* ```delete```

-Requires one flag only, ```--title```

Example: node app delete --title='Coding'

* ```list```

-Requires no flags at all

* ```version```

-Requires no flags at all

Example: node app --version

* ```help```

-Requires no flags at all

Example: node app --help

        Note: Commands are in all lower case.
