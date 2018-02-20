import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compress from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as session from 'express-session';

const app = express();

app.use(session({
    secret: 'lol-check',
    resave: true,
    saveUninitialized: true,
}));
app.use(compress());
app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
