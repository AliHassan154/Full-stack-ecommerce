import slugify from 'slugify';
import categoryModel from '../models/categoryModel.js';


export const createCategory = async (req, res) => {
   try {
   const { name } = req.body;
   if (!name) {
      return res.status(400).json({ message: "Name is required" });
   }
   const category = await categoryModel.findOne({ name });
   if (category) {
      return res.status(200).json({ message: "Category already exists", category, success: false });
   }
    const newCategory = await new categoryModel({ name, slug:slugify(name) }).save();
    res.status(201).json({ message: "Category created successfully", category: newCategory, success: true });
   } catch (error) {
      console.log("Error in creating category is:", error);
      res.status(500).json({
            message: "Error in creating category",
            error: error.message,
      });
   }
}

export const updateCategory = async (req, res) => {
   try {
      const { name } = req.body;
      const { id } = req.params;
      if (!name) {
         return res.status(400).json({ message: "Name is required" });
      }
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug:slugify(name) }, { new: true });
        res.status(200).json({ message: "Category updated successfully", category, success: true });
   } catch (error) {
      console.log("Error in updating category is:", error);
      res.status(500).json({
            message: "Error in updating category",
            error: error.message,
      });
   }
}

export const getAllCategoryController = async (req, res) => {
   try {
      const category = await categoryModel.find({});
        res.status(200).json({ 
         success: true,
         message: "All category list",
          category
         });
   } catch (error) {
      console.log("Error in fetching categories is:", error);
      res.status(500).json({
            message: "Error in fetching categories",
            error: error.message,
      });
   }
}

export const getSingleCategoryController = async (req, res) => {
   try {
      const { slug } = req.params;
      const category = await categoryModel.findOne({ slug });
      if (!category) {
         return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ message: "Category found", category });
   } catch (error) {
      console.log("Error in fetching category is:", error);
      res.status(500).json({
            message: "Error in fetching category",
            error: error.message,
      });
   }
}

export const deleteCategoryController = async (req, res) => {
   try {
      const { id } = req.params;
      const category = await categoryModel.findByIdAndDelete(id);
      if (!category) {
         return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ message: "Category deleted successfully", category, success: true });
   } catch (error) {
      console.log("Error in deleting category is:", error);
      res.status(500).json({
            message: "Error in deleting category",
            error: error.message,
      });
   }
}
