const KEY='paradise_stay_session';
export const storeSession=(value:string)=>localStorage.setItem(KEY,value);
export const readSession=()=>localStorage.getItem(KEY);
export const clearSession=()=>localStorage.removeItem(KEY);
