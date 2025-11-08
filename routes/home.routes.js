import { Router } from "express";
import {
  aboutController,
  conditionalsController,
  contactController,
  homeController,
  loopController,
  saveContactController,
  variablesController,
} from "../controller/home.controller.js";

const homeRouter = Router();

homeRouter.get("/", homeController);

homeRouter.get("/about", aboutController);

homeRouter.get("/variables", variablesController);

homeRouter.get("/conditionals", conditionalsController);

homeRouter.get("/loop", loopController);

homeRouter.get("/contact", contactController);

homeRouter.post("/contact", saveContactController);

export default homeRouter;
