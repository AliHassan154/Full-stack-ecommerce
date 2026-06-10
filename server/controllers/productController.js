import Product from '../models/productModel.js'
import fs from 'fs'
import slugify from 'slugify'
import redis from "../config/client.js"

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category,shipping, slug, quantity } = req.fields
    const { photo } = req.files

    switch (true) {
      case !name:
        return res.status(500).send({ error: 'Name is required' })
      case !description:
        return res.status(500).send({ error: 'Description is required' })
      case !price:
        return res.status(500).send({ error: 'Price is required' })
      case !category:
        return res.status(500).send({ error: 'Category is required' })
      case !photo:
        return res.status(500).send({ error: 'Photo is required' })
      case !quantity:
        return res.status(500).send({ error: 'Quantity is required' })
        case photo?.size > 1000000:
          return res.status(500).send({ error: 'Photo size exceeds 1MB limit' })
    }
    const products = new Product({ ...req.fields, slug:slugify(name) })
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path)
      products.photo.contentType = photo.type
    }
    await products.save()
    await redis.del("all-products")
    res.status(201).send({
        success: true,
        message: 'Product created successfully',
        product: products
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in creating product',
        error,
    })
  }
}

export const getProductController = async (req, res) => {
  try {
    const cachedData = await redis.get("all-products");
    if(cachedData){
      const products = JSON.parse(cachedData);
      res.status(200).send({
        success: true,
        countTotal: products.length,
        message: 'All products',
        products
    })
    }
    const products = await Product.find({}).populate('category').select('-photo').limit(12).sort({ createdAt: -1 })
    await redis.set("all-products", JSON.stringify(products))
    res.status(200).send({
        success: true,
        countTotal: products.length,
        message: 'All products',
        products,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in getting products',
        error: error.message

    })
    }
}

export const getSingleProductController = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select('-photo').populate('category')  
    res.status(200).send({
        success: true,
        message: 'Single product',
        product,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in getting single product',
        error
    })
    }
}

export const getProductPhotoController = async (req, res) => {
  try {
    const product = await Product.findById(req.params.pid).select('photo')
    if (product.photo.data) {
      res.set('Content-Type', product.photo.contentType)
      return res.status(200).send(product.photo.data)
    }
    } catch (error) {   
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in getting product photo',
        error: error.message    
    })
    }   
}

export const deleteProductController = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.pid).select('-photo')
     await redis.del("all-products");
    res.status(200).send({
        success: true,
        message: 'Product deleted successfully',
    })
  } 
    catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in deleting product',
        error: error.message    
    })
    }
}

export const updateProductController = async (req, res) => {
  try {
    const { name, description, price, category,shipping, slug, quantity } = req.fields
    const { photo } = req.files
    switch (true) {
      case !name:
        return res.status(500).send({ error: 'Name is required' })
        case !description:
        return res.status(500).send({ error: 'Description is required' })
        case !price:
        return res.status(500).send({ error: 'Price is required' })
        case !category:
        return res.status(500).send({ error: 'Category is required' })
        case !quantity:
        return res.status(500).send({ error: 'Quantity is required' })
        case photo?.size > 1000000:
          return res.status(500).send({ error: 'Photo size exceeds 1MB limit' })    
    }
    const products = await Product.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug:slugify(name) },
        { new: true }
    )   
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path)
      products.photo.contentType = photo.type
    }
    await products.save()
    await redis.del("all-products")
    res.status(201).send({
        success: true,
        message: 'Product updated successfully',
        product: products
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in updating product',
        error,
    })
  }
}