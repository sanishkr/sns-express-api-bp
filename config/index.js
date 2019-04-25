require('dotenv').config(); // this loads the defined variables from .env
const env = process.env.NODE_ENV;

const prod = {
    app: {
        host: process.env.PROD_APP_HOST || 'localhost',
        port: parseInt(process.env.PROD_APP_PORT) || 3000
    },
    db: {
        host: process.env.PROD_DB_HOST || 'localhost',
        port: parseInt(process.env.PROD_DB_PORT) || 27017,
        name: process.env.PROD_DB_NAME || 'db_prod'
    },
    website_url: '127.0.0.1',
};
const stage = {
    app: {
        host: process.env.STAGE_APP_HOST || 'localhost',
        port: parseInt(process.env.STAGE_APP_PORT) || 3001
    },
    db: {
        host: process.env.STAGE_DB_HOST || 'localhost',
        port: parseInt(process.env.STAGE_DB_PORT) || 27017,
        name: process.env.STAGE_DB_NAME || 'db_stage'
    },
    website_url: '127.0.0.1',
};
const local = {
    app: {
        host: process.env.LOCAL_APP_HOST || 'localhost',
        port: parseInt(process.env.LOCAL_APP_PORT) || 3002
    },
    db: {
        host: process.env.LOCAL_DB_HOST || 'localhost',
        port: parseInt(process.env.LOCAL_DB_PORT) || 27017,
        name: process.env.LOCAL_DB_NAME || 'db_local'
    },
    website_url: '127.0.0.1',
};

const config = {
    prod,
    stage,
    local,
};

module.exports = {
    config: config[env]
};