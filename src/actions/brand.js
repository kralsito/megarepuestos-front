'use server'

import { getBrands, createBrand, deleteBrand } from "@/lib/api/brand"

export async function getBrandsAction() {
    const {data, headers} = await getBrands()
    return data
  }

export async function createBrandAction(formData) {
    const {data, headers} = await createBrand(formData)
    return data
  } 

export async function deleteBrandAction(id){
    const {data, headers} = await deleteBrand(id)
    return data 
}