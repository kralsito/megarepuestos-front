import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getReplacements() {
    return await apiRequest(`/replacement`, 'GET', null, 'application/json', false)
  }

  export async function createReplacement(formData) { 
    return await apiRequest(`/replacement`, 'POST', formData, 'multipart/form-data', true)
  }

export async function deleteReplacement(id){
  return await apiRequest(`/replacement/${id}`, 'DELETE', null, 'application/json', true)
}
