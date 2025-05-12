import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getBrands(page = 0, size = 10) {
    return await apiRequest(`/brand?page=${page}&size=${size}`, 'GET', null, 'application/json', false)
  }

export async function createBrand(formData) { 
  return await apiRequest(`/brand`, 'POST', formData, 'multipart/form-data', true)
}

export async function deleteBrand(id){
  return await apiRequest(`/brand/${id}`, 'DELETE', null, 'application/json', true)
}

export async function getBrandsDropDown() {
  return await apiRequest(`/brand?size=100`, 'GET', null, 'application/json', false);
}

