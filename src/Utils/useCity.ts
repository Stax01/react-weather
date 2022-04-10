
export const useCity = (city: any) => {
  const element = city.map((obj: any, index: number) => ({ ...obj, value: index, label: obj.city }))
  const data = element.map((obj:any)=> ({label: obj.label, value:obj.value}) )
  return data
}