'use server'

import { getReplacements, createReplacement, deleteReplacement } from "@/lib/api/replacement"

export async function getReplacementsAction() {
    const {data, headers} = await getReplacements()
    return data
  }

export async function createReplacementAction(formData) {
    const {data, headers} = await createReplacement(formData)
    return data
  } 

export async function deleteReplacementAction(id){
    const {data, headers} = await deleteReplacement(id)
    return data 
}