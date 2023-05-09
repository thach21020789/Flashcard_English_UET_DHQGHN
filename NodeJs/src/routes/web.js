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
  router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);
  router.post("/logout", loginController.postLogOut);

  router.get("/register", registerController.getRegisterPage);
  router.post("/register", registerController.createNewUser);

  router.get("/login", loginController.checkLoggedOut, loginController.getLoginPage);
  router.post("/login", loginController.handleLogin);

  router.post("/change-password", loginController.checkLoggedIn, loginController.handleChangePassword)
  router.post("/forgot-password", loginController.handleForgotPassword)
  router.post("/reset-password/:token", loginController.handleResetPassword)

  router.get("/group/:category", loginController.checkLoggedIn, flashcardController.getVocabByC);
  router.get("/group/:category/:difficulty", loginController.checkLoggedIn, flashcardController.getVocabByCD);
  router.get("/search/:word", loginController.checkLoggedIn, flashcardController.getVocab);
  router.get("/search-random", loginController.checkLoggedIn, flashcardController.getRandomVocab);

  app.get("/user", (req, res) => {
    return res.json({
      user:req.user // The req.user stores the entire user that has been authenticated inside of it.
    })
  });

  return app.use("/", router);
};
module.exports = initWebRoutes;
