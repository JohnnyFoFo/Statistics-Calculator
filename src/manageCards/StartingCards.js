import {
    normcdf,
    oneSampleT,
    twoSampleT,
    binomcdf,
    poissonCdf,
    lineRegression,
    oneSampleData,
    compareData,
    Sample,
    Chunks,
    Factorial,
    
    SampleKurtosis
    
} from './Calculations';



export const DEFAULT_CARDS = [
    {
        type: 'distribution',
        name: 'normcdf',
        func: (z) => normcdf(z),
        args: [
            'Z-Score',
        ],
        description: 'The result of a normcdf function is the area under the curve of a standard normal distribution given a z score',

        
    },
    {
        type: 'distribution',
        name: 'one-sample T',
        func: (data,exp) => oneSampleT(data,exp),
        args:[
            'data',
            'expected value'
        ],
        description: 'returns a t crit value for  a two-sample T test',
        
    },
    {
        type: 'distribution',
        name: 'two-sample T',
        func: (data1,data2,expdiff) => twoSampleT(data1,data2,expdiff),
        args:[
            'data',
            'data',
            'Null Hypothesis '
        ],
        description: 'returns a t crit value for a one-sample T test'
    },
    {
        type: 'distribution',
        name: 'binomial cdf',
        func: (trials,prob) => binomcdf(trials,prob),
        args:[
            '# Trials ',
            'Probability '
        ],
       description: 'returns the '
    }, 
    {
        type: 'distribution',
        name: 'Poisson cdf',
        func: (lambda) => poissonCdf(lambda),
        args:[
            'lambda'
        ],
        
    },
     {
        type: 'enter',
        name: 'enter Numbers',
        func: (data) => oneSampleData(data),
        args:[
            'data'
        ],
       

    }, 
    {
        type:'enter',
        name: 'linearRegression',
        func: (point1,point2) => lineRegression(point1,point2),
        args:[
            'data',
            'data'
        ],
       
    },
    {
        type: 'sample',
        name: 'compareTwoSamples',
        func: (sampleOne, sampleTwo) => compareData(sampleOne, sampleTwo),
        args:[
            'dataOne',
            'dataTwo'
        ],
       
    },
    {
        type: 'sample',
        name: 'sample from population',
        func: (data,number) => Sample(data,number),
        args: [
            'data',
            'nummber'
        ]
    },
    {
        type: 'miscellaneous',
        name: 'chunk',
        func: (data,num) => Chunks(data,num),
        args:[
            'data',
            'number'
        ],

    },
    {
        type: 'miscellaneous',
        name: 'factorial',
        func: (num) => Factorial(num),
        args:[
            'integer'
        ],
    },
   
    {
        type: 'miscellaneous',
        name: 'SampleKurtosis',
        func: (arr) => SampleKurtosis(arr),
        args:[
            'data'
        ],
    }

];