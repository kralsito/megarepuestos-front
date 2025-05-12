'use server'

import { getBrands, createBrand, deleteBrand, getBrandsDropDown } from "@/lib/api/brand"

export async function getBrandsAction(page = 0, size = 10) {
   const { data, headers } = await getBrands(page, size);
  
    const totalCount = parseInt(headers["x-total-count"] || "0", 10);
    const totalPages = Math.ceil(totalCount / size);
  
    return { data, totalPages };
  }

export async function createBrandAction(formData) {
    const {data, headers} = await createBrand(formData)
    return data
  } 

export async function deleteBrandAction(id){
    const {data, headers} = await deleteBrand(id)
    return data 
}

export async function getBrandsDropdownAction() {
    const {data, headers} = await getBrandsDropDown()
    return data
  }

