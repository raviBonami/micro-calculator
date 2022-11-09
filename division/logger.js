import winston from 'winston'

const logger = winston.createLogger({
    level:"debug",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename:'./logs/error.log', level:'debug'}),
        new winston.transports.File({filename: './logs/combined.log'})
    ]
})

logger.stream = {
    write: function (msg, encoding){
        logger.info(msg);
    }
}

export default logger;