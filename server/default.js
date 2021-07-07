import { products } from './constants/product.js'
import product from './model/productSchema.js'

const defaultData = async () => {
    try {
        await product.deleteMany({});
        await product.insertMany(products);
        console.log("data imported successfully")
    } catch(error) {
        console.log("Error: ", error.message);
    }
}

export default defaultData;