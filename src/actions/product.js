'use server'

import { getProducts, createProduct } from "@/lib/api/product"

export async function getProductsAction() {
    const {data, headers} = await getProducts()
    return data
  }

export async function createProductAction(formData) {
    const {data, headers} = await createProduct(formData)
    return data
  } 