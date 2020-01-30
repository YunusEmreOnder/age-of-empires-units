
export const SET_UNIT = "SET_UNIT"

function setUnitAction(data = []){
   return{
       type:SET_UNIT,
       payload:data
   } 
}

export {setUnitAction}