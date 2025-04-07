'use server'

import { getForms, createForm, checkPhoneNumberExists, deleteForm } from "@/lib/api/form"

export async function getFormsAction() {
    const {data, headers} = await getForms()
    return data
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