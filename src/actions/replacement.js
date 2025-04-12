'use server'

import { getReplacements, createReplacement, deleteReplacement } from "@/lib/api/replacement"

export async function getReplacementsAction(queryParams) {
    try {
      const response = await getReplacements(queryParams);
      
      return {
        data: response.data || [],
        headers: response.headers || {}
      };
    } catch (error) {
      console.error("Error en getReplacementsAction:", error);
      return {
        data: [],
        headers: {}
      };
    }
  }

export async function createReplacementAction(formData) {
    const {data, headers} = await createReplacement(formData)
    return data
  } 

export async function deleteReplacementAction(id){
    const {data, headers} = await deleteReplacement(id)
    return data 
}