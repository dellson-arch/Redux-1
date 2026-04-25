import axios from "axios";

export let fetchProducts = async({pageParam = 1})=>{ //ek time pe ek page
try {
    let limit = 20
    let skip = (pageParam - 1) * limit //next baar me jo 20 aa chuke hai unko skip karo agle 20 return karo
     let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
     return res.data
} catch (error) {
    console.log("error",error.message)
}
}