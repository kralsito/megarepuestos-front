import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getTypeReplacements() {
    return await apiRequest(`/typeReplacement`, 'GET', null, 'application/json', false)
  }

export async function createTypeReplacement(formData) { 
  return await apiRequest(`/typeReplacement`, 'POST', formData, 'multipart/form-data', true)
}

export async function deleteTypeReplacement(id){
  return await apiRequest(`/typeReplacement/${id}`, 'DELETE', null, 'application/json', true)
}

export async function getTypeReplacementsDropDown() {
  return await apiRequest(`/typeReplacement?size=100`, 'GET', null, 'application/json', false);
}