interface StatsFuncs {
  mean: CalculationFunction,
  minMax: (arr:number[]) => number[],
  median:CalculationFunction,
  mode: (arr:number[]) => number[],
  range: CalculationFunction,
  deviation: CalculationFunction
}


type CalculationFunction = {
    (arr: number[]): number
}


export const StatsFuncs:StatsFuncs = {
  mean(arr) {
    const total = arr.length 
    const sum = arr.reduce((a,c) => a + c, 0)
    return sum/total 
  },
  minMax(arr){
    const sorted = arr.sort((a,b) => a -b)
    return [sorted[0], sorted[sorted.length -1]]
  },
  
  
    median(arr){
    const sorted = arr.sort((a,b) => a -b)
    const n = sorted.length
    if(n % 2 === 0){
      return (sorted[(n/2) -1] + sorted[(n/2)]) / 2
    } else{
      return sorted[((n +1) /2) - 1]
    }
  },
  
  
    mode(arr){
    let maxCount: number = 0
    let modeNums: number[]= []
    const obj:{[key:number]: number} = {}
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
    },

        range(arr){
        const sorted = arr.sort((a,b) => a -b)
        return Math.abs(sorted[0] - sorted[arr.length - 1])
      },

       deviation(arr){
        const mean = (arr.reduce((a,c) => a + c)) / (arr.length)
        const mapped = arr.map(x => Math.pow((mean - x), 2))
        const added = mapped.reduce((a, c) => a + c)
        const close = added / (arr.length - 1)
        const results = Math.sqrt(close)
        return Number(results.toFixed(2))
        }

      }