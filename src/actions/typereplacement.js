'use server'

import { getTypeReplacements, createTypeReplacement, deleteTypeReplacement } from "@/lib/api/typereplacement"

export async function getTypeReplacementsAction() {
    const {data, headers} = await getTypeReplacements()
    return data
  }

export async function createTypeReplacementAction(formData) {
    const {data, headers} = await createTypeReplacement(formData)
    return data
  } 

export async function deleteTypeReplacementAction(id){
    const {data, headers} = await deleteTypeReplacement(id)
    return data 
}