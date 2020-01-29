
export const FILTER_UNITS = "FILTER_UNITS"
export const GET_UNITS = "GET_UNITS"

function filterUnits(data = []){
   return{
       type:FILTER_UNITS,
       payload:data
   } 
}
function getUnits(data = []){
   return{
       type:GET_UNITS,
       payload:data
   } 
}

export {filterUnits, getUnits}