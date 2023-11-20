export function jwtDecode(token){
    let arr=[];
    if(typeof(token)!=="string")  return undefined;
    arr=token.split('.');
    if(arr.length!==3) return undefined;
    try{
        return JSON.parse(atob(arr[1]));
    }
    catch{
        return undefined;
    } 
}