import axios from "axios";

const url='http://localhost:4200/products'

export const getProducts=async()=>{
  return await axios.get(url)
}

export const deletedProducts=async(id)=>{
     return await axios.delete(`${url}/${id}`)
}

export const postData=async(data)=>{
    return await axios.post(url,data,{
         headers:{
            "Content-Type":"application/json"
         }
    })
}

export const updateProduct = async (id, data) => {
    return await axios.put(`${url}/${id}`, data);
};