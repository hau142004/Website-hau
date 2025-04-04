import express from "express";
import homecontroller from "../controllers/homecontroller";
let router = express.Router();

let initWebRouters = (app) => {


    router.get('/',homecontroller.getHomePage);

    router.get('/about',homecontroller.getAboutPage);

    return app.use('/', router);

}




module.exports = initWebRouters;