export const sleep = (millis: number) => {
    return new Promise(resolve => setTimeout(resolve, millis));
};


export const formatTime = (timestamp : number) =>{
     const date = new Date(timestamp * 1000);
     return date.toLocaleDateString()
}