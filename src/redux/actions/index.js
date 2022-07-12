import * as types from './types';


export const refreshtable =()=>{

    return {
        type: types.REFRESH,
        payload:"Tabla actualizada"
    }
}

export const islogged = ()=>{
  
    return {
      type: types.ISLOGGED,
      payload:"Usuario Logeado"
    }

}
export const islogout = ()=>{
  
  return {
    type: types.ISLOGOUT,
    payload:"Usuario desconocido"
  }

}

