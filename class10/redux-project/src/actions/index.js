export const incNum = (num)=>{
    return {
        type : "INCREMENT",
        payload : num
    }
}
export const decNum = ()=>{
    return {
        type : "DECREMENT"
    }
}