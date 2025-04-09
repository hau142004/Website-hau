import express from "express";
import homecontroller from "../controllers/homecontroller";
import userController from "../controllers/userController";

let router = express.Router();

const initWebRouters = (app) => {
    router.get("/", homecontroller.getHomePage);
    router.get("/about", homecontroller.getAboutPage);
    router.get("/crud", homecontroller.CRUD);
    router.post("/post-crud", homecontroller.postCRUD);
    router.get("/get-crud", homecontroller.displayGetCRUD);
    router.get("/edit-crud", homecontroller.getEditCRUD);
    router.post("/put-crud", homecontroller.putCRUD);
    router.get("/delete-crud", homecontroller.deleteCRUD);

    router.post("/api/login",userController.handleLogin);

    return app.use("/", router);
};

export default initWebRouters;