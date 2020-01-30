
export const SET_TITLE = "SET_TITLE"

function pageTitle(data = []){
   return{
       type:SET_TITLE,
       payload:data
   } 
}
export {pageTitle}