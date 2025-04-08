import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getBrands() {
    return await apiRequest(`/brand`, 'GET', null, 'application/json', false)
  }

export async function createBrand(formData) { 
  return await apiRequest(`/brand`, 'POST', formData, 'multipart/form-data', true)
}

export async function deleteBrand(id){
  return await apiRequest(`/brand/${id}`, 'DELETE', null, 'application/json', true)
}
