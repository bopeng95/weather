# Weather App    
### How to run
- After cloning, `npm install` the dependencies
- `npm run dev` to start hosting on port 8080

### About config.json file    
Inside the `src` folder, there is a `config.json` containing the `appid` for the application     
It looks like this (removed by gitignore)
```
{
	"appid": "<your appid from open weather>"
}
```
If you do not want to create a `config.json` file
```
//remove this inside helpers.js
const { appid } = require('./config.json');

//to
const appid = '<your appid from open weather>';
```
