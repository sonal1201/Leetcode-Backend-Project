const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb')

const allowedTransport = [];
//winston.transports.Console() -> configure console based printing inside winston log
//Logging on the console. 
allowedTransport.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH-mm-ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

//Logging on the Mongo-db database. 
allowedTransport.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}))

//Logging on the Mongo-db database. 
allowedTransport.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    //format
    format: winston.format.combine(
        // first agrument to combine is defining how we want the timestamp to come-up 
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH-mm-ss'
        }),
        //Second agrument to combine method, which define what is exactly goint to printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransport
});

module.exports = logger

