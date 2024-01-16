import { store } from "../components/redux"

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


export const gql=getGql("http://shop-roles.node.ed.asmer.org.ua/graphql");
function getGql (endpoint){
    return function gql(query, variables={}){
        return fetch(endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...(store?.getState().auth.token?{authorization: "Bearer "+store?.getState().auth.token}:{})  
            },
            body: JSON.stringify({query, variables}),
        }).then(res => res.json())
            .then(res1=>{
                if(!res1.data && res1.errors){
                    throw(new Error(JSON.stringify(res1.errors)));
                }else{
                    return Object.values(res1.data)[0];
                }
            });
    }
}