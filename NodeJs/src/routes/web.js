import express from "express";
import homePageController from "../controllers/homePageController";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import flashcardController from "../controllers/flashcardController"
import auth from "../validation/authValidation";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController";

import testController from "../controllers/testController"
// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.handleHelloWorld);

    router.get("/login", loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);

    router.post("/logout", loginController.postLogOut);

    router.get("/:category", flashcardController.getVocabByC);
    router.get("/:category/:difficulty", flashcardController.getVocabByCD);

    app.get('/protected', (req, res) => {
        if (req.isAuthenticated()) {
          // The user is authenticated, so we can proceed with the protected route
          res.send('This is a protected route');
        } else {
          // The user is not authenticated, so we redirect to the login page
          res.send('This is not a protected route');;
        }
      });

    router.get("/test", testController.getTestPage);
    return app.use("/", router);
};
module.exports = initWebRoutes;
