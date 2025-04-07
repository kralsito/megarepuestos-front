import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getForms() {
    return await apiRequest(`/form?page=0&size=20`, 'GET', null, 'application/json', false)
  }

export async function createForm(formData) { 
    const params = new URLSearchParams();
    params.append('firstName', formData.firstName);
    params.append('lastName', formData.lastName); 
    params.append('phoneNumber', formData.phoneNumber);
    
  return await apiRequest(`/form?${params.toString()}`, 'POST', null, 'application/json', false);
}

export async function checkPhoneNumberExists(phoneNumber) {
    return await apiRequest(`/form/exist?phoneNumber=${phoneNumber}`, 'GET', null, 'application/json', false);
  }

export async function deleteForm(id){
  return await apiRequest(`/form/${id}`, 'DELETE', null, 'application/json', true)
}
  