
export const convertSecondsToHHMMSS = ({ seconds, maxTime }) => {
    if (Number.isNaN(seconds)) return null;
    const secondsIn = seconds - Math.floor(seconds/43200)*43200;//нормируем секунды до 12:00:00
    const hh = Math.floor(secondsIn / 3600);
    const mm = Math.floor((secondsIn - hh * 3600) / 60);
    const ss = Math.floor(secondsIn - hh * 3600 - mm * 60);
    return {hh,mm,ss};    
}

export const getTimeString = ({hh, mm, ss}) => {
    // console.log(hh, mm, ss);
    return `${hh>9?hh:'0'+hh}:${mm>9?mm:'0'+mm}:${ss>9?ss:'0'+ss}`;
}

export function recallDate(timeStamp){
    const d=new Date(timeStamp);
    return (d.getDate()<10?'0'+d.getDate():d.getDate())+'.'+(d.getMonth()<9?('0'+(d.getMonth()+1)):(d.getMonth()+1))+'.'+d.getFullYear()+'   '+(d.getHours()<10?'0'+d.getHours():d.getHours())+':'+(d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes());
}

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