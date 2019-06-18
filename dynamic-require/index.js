const mod = window && window.globalState ? '/myFeature/a' : '/myFeature/b';
const logger = require(`./src/resources/static/${mod}`);
logger();
