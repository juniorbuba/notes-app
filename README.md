# Notes-app 
![image of note and pen](note.jpg)

A small ```Nodejs``` application that allows the user take notes using the Commmand Line Interface.

The only required external node modules needed are ```yargs``` and ```chalk```.

To run this application, clone this repository and run ```npm install``` to install the required dependencies.

# Usage

Available Commands

1 ```add```

2 ```delete```

3 ```list```

4 ```read```

5 ```help```

6 ```version```

7 ```author```

## Examples

* ```add```

-Requires two flags, ```--title``` and ```--body```

        Example: node app add --title='Immediate Exfil' --body='Alpha Chalk, this is Whiskey Echo Bravo requesting immediate exfil'

* ```delete```

-Requires one flag only, ```--title```

        Example: node app delete --title='Social Distancing'

* ```read```

-Requires one flag only, ```--title```

        Example: node app read --title='Excavating Mars'

* ```list```

        Example: node app --list

* ```version```

        Example: node app --version

* ```help```

        Example: node app --help

* And finally the last but not the least, ```author```

        Example: node app author

        Note: Commands are in all lower case.