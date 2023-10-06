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
