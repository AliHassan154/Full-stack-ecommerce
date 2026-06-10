import express from "express";
import { createCategory, updateCategory, getSingleCategoryController, getAllCategoryController, deleteCategoryController } from "../controllers/categoryCotroller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const route = express.Router();

route.post("/create-category", requireSignIn, isAdmin, createCategory);

route.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);

route.get("/get-category", getAllCategoryController);

route.get("/get-category/:slug", getSingleCategoryController);

route.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController);

export default route;