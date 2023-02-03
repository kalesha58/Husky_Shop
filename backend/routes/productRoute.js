const express = require("express");
const { getAllProducts, createProduct ,updateProduct,deleteProduct, getProductDetails} = require("../controller/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const router = express.Router();

    
router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"),  getAllProducts)
router.route("/product/new").post(isAuthenticatedUser,createProduct)
router.route("/product/:id").put(isAuthenticatedUser,updateProduct)
router.route("/product/:id").delete(isAuthenticatedUser,deleteProduct).get(getProductDetails)
module.exports = router;
