'use server'

import { getForms, createForm, checkPhoneNumberExists, deleteForm } from "@/lib/api/form"


export async function getFormsAction(page, size) {
  const { data, headers } = await getForms(page, size);

  const totalCount = parseInt(headers['x-total-count'], 10) || 0;
  const totalPages = Math.ceil(totalCount / size);

  return {
    data,
    totalPages,
  };
}

export async function createFormAction(formData) {
    const {data, headers} = await createForm(formData)
    return data
  } 

export async function checkPhoneNumberExistsAction(dni) {
    const { data } = await checkPhoneNumberExists(dni);
    return data; 
 }

export async function deleteFormAction(id){
    const {data, headers} = await deleteForm(id)
    return data 
}