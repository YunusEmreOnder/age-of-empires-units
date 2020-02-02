
export const SET_UNIT = "SET_UNIT"
export const SET_UNIT_SUCCESS = "SET_UNIT_SUCCESS"
function setUnitAction(data = []){
   return{
       type:SET_UNIT,
       payload:data
   } 
}
export {setUnitAction}