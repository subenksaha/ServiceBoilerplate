import { registerAs } from "@nestjs/config";
import * as winston from 'winston'
import { utilities } from "nest-winston";

export default registerAs('winston', () => {
    const TransportConsole = new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike()
        )
    })
    return process.env.NODE_ENV == 'DEV'? {
        transports: [
            TransportConsole
        ]
    } : {
        transports: []
    }
})