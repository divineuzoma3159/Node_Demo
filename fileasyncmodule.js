const {readFile,writeFile} = require('fs')
  console.log('start')
  
const tests = readFile('./first/text1.txt', 'utf-8', (err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
  
    readFile('./first/text.txt', 'utf-8', (err,result) =>{
        if(err){
            console.log(err);
            return;

        }
        const second = result;
        writeFile('./first/combine1.txt',
            `This is a feaking combination ${first}, ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting the next one');
// const allIn = readFile('./first/combine1.txt','utf-8',(error,results) =>{
//     if(error){
//         console.log(error);
//         return
//     }
//     const one = results
//     readFile('./first/combine.txt', (error, results) => {
//           if(error){
//         console.log(error);
//         return
//     }
//     const two = results
//     writeFile('./first/sm.txt',
//         `First: ${one}, Second: ${two}`,
//         (error,results) => {
//              if(error){
//         console.log(error);
//         return
//         }
//         console.log(results)
//     }
//     )
//     } )
// })
