const Product = require("../models/productModel");
// {====================Create-Product=========     ADMIN                ++++=================}
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};
// {========================GET_ALL_PRODCUTS===================}
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

// {========================UPDATE-PRODUCT----------ADMIN----------------===================}
exports.updateProduct = async (req, res) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product nort found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};
// {========================DELETE-PRODUCT--------------------------===================}
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
};
