interface CalculationFunction {
    (arr: number[]): number
}

export const mean: CalculationFunction = (arr) => {
    let total = arr.length 
    let sum = arr.reduce((a,c) => a + c, 0)
    return sum/total 
  }
  export const minMax = (arr:number[]):number[] => {
    let sorted = arr.sort((a,b) => a -b)
    return [sorted[0], sorted[sorted.length -1]]
  }
  
  
  export const median: CalculationFunction = (arr) => {
    let sorted = arr.sort((a,b) => a -b)
    let n = sorted.length
    if(n % 2 === 0){
      return (sorted[(n/2) -1] + sorted[(n/2)]) / 2
    } else{
      return sorted[((n +1) /2) - 1]
    }
  }
  
  
  export function mode(arr:number[]): number[]{
    let maxCount: number = 0
    let modeNums: number[]= []
    let obj:{[key:number]: number} = {}
    arr.forEach(x => {
      if(!obj[x]){
        obj[x] = 1
      } else{
        obj[x] += 1
      }
      if(obj[x] > maxCount){
        maxCount = obj[x]
        modeNums = [x]
     } else if(obj[x] === maxCount){
        modeNums.push(x)
      
      }
    })  
    return modeNums
    }

    export const range: CalculationFunction = (arr) => {
        let sorted = arr.sort((a,b) => a -b)
        return Math.abs(sorted[0] - sorted[arr.length - 1])
      }

      export const deviation: CalculationFunction = (arr) =>{
        let mean = (arr.reduce((a,c) => a + c)) / (arr.length)
        let mapped = arr.map(x => Math.pow((mean - x), 2))
        let added = mapped.reduce((a, c) => a + c)
        let close = added / (arr.length - 1)
        let results = Math.sqrt(close)
        return Number(results.toFixed(2))
        }

     