import {
    cumulativeStdNormalProbability,
    tTest,
    tTestTwoSample,
    binomialDistribution,
    poissonDistribution,
    linearRegression,
    sampleCorrelation,
    sampleCovariance,
    min,
    max,
    sum,
    product,
    mean,
    sample,
    sampleWithReplacement,
    chunk,
    factorial,
    logit,
    sampleKurtosis
} from 'simple-statistics';




export function normcdf(z) { // normcdf function that returns p value

    return {
        area: cumulativeStdNormalProbability(z)
    }
}

export function oneSampleT(data, expected) {
    
    return {
        "T-value": tTest(data, expected)
    }
}

export function twoSampleT(dataOne, dataTwo) {
    return {
        "T-value": tTestTwoSample(dataOne, dataTwo)
    }
}

export function binomcdf(trials, probability) {
    return {
        probability: binomialDistribution(trials, probability)[0]
    }

}

export function poissonCdf(lamda) {
    return {
        probability: poissonDistribution(lamda)[0]
    }
}

export function lineRegression(cord1, cord2) {
    const regress = linearRegression(cord1, cord2)
    return {
        "Equation:": 
            `y = ${(regress.m) ? regress.m.toFixed(2) + "x" : ""} ${(regress.m && regress.b) ? "+" : ""} ${(regress.b.toFixed(2)) ? regress.b.toFixed(2) : ""}`
    }

}

export function oneSampleData(data) {
    return {
        min: min(data),
        max: max(data),
        sum: sum(data),
        product: product(data),
        mean: mean(data)
    }

}
export function compareData(dataOne, dataTwo) {
    return {
        cov: sampleCovariance(dataOne, dataTwo),
        cor: sampleCorrelation(dataOne, dataTwo)
    }
}
export function Sample(data,number){
    return{
        replacement: sampleWithReplacement(data,number,Math.random),
        nonReplacement: sample(data,number,Math.random)
    }
}
export function Chunks(data,number){
    let chunkss = {

    }
    const chunkarr = chunk(data,number); 

    chunkarr.forEach((elem,i)=>{  
        let key = 'chunk ' + i.toString();
        let chunkret =  ''
        for (let x = 0;  x < elem.length;  x++) {
            chunkret  +=  `${chunkarr[i][x]},`;
            
        }
        
        chunkss[key] = chunkret
    })

    return  chunkss;
}
export function Factorial(number){
    return{
        [number + '!']: factorial(parseInt(number))
    }
}

export function SampleKurtosis(array){
    return{
        sampleKurtosis: sampleKurtosis(array)
    }
}