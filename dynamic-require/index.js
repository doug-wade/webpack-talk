const mod = window && window.globalState ? '/myFeature/a' : '/myFeature/b';
const logger = require(`./stuff/${mod}`);
logger();
