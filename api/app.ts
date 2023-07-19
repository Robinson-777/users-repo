import * as bodyParser from "body-parser";
const path = require('path');
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { UserController } from "./controller/user.controller";
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');
import cors = require('cors');

class App {

    public express: express.Application;
    public logger: APILogger;
    public userController: UserController;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd() + "/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd() + "/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.userController = new UserController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(path.join(__dirname, '../ui/build')));
        this.express.use(cors());
    }

    private routes(): void {

        this.express.get('/api/users', (req, res) => {
            this.userController.getUsers().then(data => res.json(data));
        });

        this.express.post('/api/user', (req, res) => {
            console.log(req.body);
            this.userController.createUser(req.body.user).then(data => res.json(data));
        });

        this.express.put('/api/user', (req, res) => {
            this.userController.updateUser(req.body.user).then(data => res.json(data));
        });

        this.express.delete('/api/user/:id', (req, res) => {
            this.userController.deleteUser(req.params.id).then(data => res.json(data));
        });

        this.express.get("/", (req, res, next) => {
            res.sendFile(path.join(__dirname, '../ui/build/index.html'));
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;