'use server'

import { getProducts, createProduct, deleteProduct, getProductsAdmin } from "@/lib/api/product"

export async function getProductsAction() {
    const {data, headers} = await getProducts()
    return data
  }

export async function createProductAction(formData) {
    const {data, headers} = await createProduct(formData)
    return data
  } 

export async function deleteProductAction(id){
    const {data, headers} = await deleteProduct(id)
    return data 
}

export async function getProductsAdminAction(page = 0, size = 10) {
   const { data, headers } = await getProductsAdmin(page, size);
  
    const totalCount = parseInt(headers["x-total-count"] || "0", 10);
    const totalPages = Math.ceil(totalCount / size);
  
    return { data, totalPages };
  }