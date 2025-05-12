'use server'

import { getTypeReplacements, createTypeReplacement, deleteTypeReplacement, getTypeReplacementsDropDown } from "@/lib/api/typereplacement"

export async function getTypeReplacementsAction(page = 0, size = 10) {
  const { data, headers } = await getTypeReplacements(page, size);

  const totalCount = parseInt(headers["x-total-count"] || "0", 10);
  const totalPages = Math.ceil(totalCount / size);

  return { data, totalPages };
}


export async function createTypeReplacementAction(formData) {
    const {data, headers} = await createTypeReplacement(formData)
    return data
  } 

export async function deleteTypeReplacementAction(id){
    const {data, headers} = await deleteTypeReplacement(id)
    return data 
}

export async function getTypeReplacementsDropdownAction() {
    const {data, headers} = await getTypeReplacementsDropDown()
    return data
  }
