import * as types from './types';


export const refreshtable =()=>{

    return {
        type: types.REFRESH,
        payload:"Tabla Actualizada"
    }
}

export const islogged = ()=>{
  
    return {
      type: types.ISLOGGED,
      payload:"Welcome Back!"
    }

}
export const islogout = ()=>{
  
  return {
    type: types.ISLOGOUT,
    payload:"Usuario Desconocido"
  }

}

