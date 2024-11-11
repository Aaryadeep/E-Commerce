import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js";

// function for adding product
const addProduct = async (req, res) => {
  try {

    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    const image1 = req.files.image1 ? req.files.image1[0] : undefined;
    const image2 = req.files.image2 ? req.files.image2[0] : undefined;
    const image3 = req.files.image3 ? req.files.image3[0] : undefined;
    const image4 = req.files.image4 ? req.files.image4[0] : undefined;

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        console.log(result);
        return result.secure_url;
      })
    )

    console.log(imagesUrl);

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestSeller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      images: imagesUrl,
      date: Date.now()
    }

    const product = new productModel(productData);
    await product.save();

    res.json({
      success: true,
      message: "Product images uploaded on cloudinary and product Model added in mongoDB"
    })


    // console.log(name, description, price, category, subCategory, sizes, bestseller);
    // console.log(imagesUrl);

  }
  catch (error) {
    res.json(
      {
        success: false,
        message: "file upload" + error.message
      }
    )
  }
}

// function for list of product
const listProducts = async (req, res) => {

  try {

    const products = await productModel.find({});
    res.json(
      {
        success: true,
        products
      }
    )
  }
  catch (error) {
    res.json(
      {
        success: false,
        message: error.message,
        error
      }
    )
  }
}

// function for removing product
const removeProduct = async (req, res) => {

  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  }
  catch (error) {
    res.json({ success: false, message: "Product deletion failed" + error.message });
  }
}

// 
const singleProduct = async (req, res) => {

  try {
    const product = await productModel.findById(req.body.id);
    res.json({ success: true, product });
  }
  catch (error) {
    res.json({ success: false, message: "single product retrieval error: " + error.message });
  }
}

export { addProduct, listProducts, removeProduct, singleProduct };