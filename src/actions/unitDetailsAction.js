
export const GET_UNIT = "GET_UNIT"

function getUnit(data = []){
   return{
       type:GET_UNIT,
       payload:data
   } 
}

export {getUnit}