
export function SetSessionStorage(key, value){
        sessionStorage.setItem(key,value)
}
export function DelSessionStorage(key){
    sessionStorage.removeItem(key)
}
export function GetSessionStorage(key){
    return sessionStorage.getItem(key)
}