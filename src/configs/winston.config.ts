import { registerAs } from "@nestjs/config";
import * as winston from 'winston'
import { utilities, WinstonModuleOptions } from "nest-winston";

export default registerAs('winston', () => {
    const common = {
        defaultMeta: {
            service: 'service'
        },
        exitOnError: false,
    } as WinstonModuleOptions;

    const TransportConsole = new winston.transports.Console({
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike()
        )
    });
    const TransportFile = new winston.transports.File({
        handleExceptions: true,
        filename: 'logs/log',
        format: winston.format.combine(
            winston.format.timestamp(),
        )
    })
    return process.env.NODE_ENV == 'DEV'? {
        ...common,
        transports: [
            TransportConsole
        ]
    } : {
        ...common,
        transports: [
            TransportFile
        ]
    }
})