import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getReplacements(queryParams = "page=0&size=20") {
    try {
      const response = await apiRequest(`/replacement?${queryParams}`, 'GET', null, 'application/json', false);
      return response;
    } catch (error) {
      console.error("Error en getReplacements:", error);
      throw error;
    }
  }

  export async function createReplacement(formData) { 
    return await apiRequest(`/replacement`, 'POST', formData, 'multipart/form-data', true)
  }

export async function deleteReplacement(id){
  return await apiRequest(`/replacement/${id}`, 'DELETE', null, 'application/json', true)
}
