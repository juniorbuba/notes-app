# Notes-app 
![image of note and pen](note.jpg)

A small ```Nodejs``` application that allows the user take notes using the Commmand Line Interface.

The only required external node modules needed are ```yargs``` and ```chalk```, you can clone and run ```npm install``` to install these packages. I recommend also having Nodemon installed.

Available commands to use ```notes-app``` are: ```add```, ```delete``` & ```list```

# Usage

* ```add```

-Requires two flags, ```--title``` and ```--body```

Example: node app add --title='Coding' --body='Refactor all functions to arrow functions'

* ```delete```

-Requires one flag only, ```--title```

Example: node app delete --title='Coding'

* ```list```

-Requires no flags at all

Example: node app list

        Note: Commands are in all lower case.
