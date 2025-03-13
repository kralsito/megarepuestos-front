import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getProducts() {
    return await apiRequest(`/product?page=0&size=20`, 'GET', null, 'application/json', false)
  }

export async function createProduct(formData) { 
  return await apiRequest(`/product`, 'POST', formData, 'multipart/form-data', true)
}
