
export const GET_UNITS = "GET_UNITS"

function getUnits(data = []){
   return{
       type:GET_UNITS,
       payload:data
   } 
}

export {getUnits}