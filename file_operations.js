//********************************************readFile
// let fs =require('fs')

// let readFile=(file)=>{
//     fs.readFile(file,'utf8',(err,data)=>{
//     if(err){
//         console.log('error reading file',err);
//         return;
//     }
//     console.log('file content');
//     console.log(data)
// })
// }

// let fileName1="one.txt"

// readFile(fileName1)

//************************************************************write file */
// let fs=require('fs')

// let writeFile=(file,contentToWrite)=>{
// fs.writeFile(file,contentToWrite,(err)=>{
// if(err){
// console.error('Error writing',err)
// return
// }
// console.log('content sucessfully written to file.')

// })
// }
//  let fileName2="two.txt"
// let someContent="this is the right thing to write"
// writeFile(fileName2,someContent)

////*****************************************************************append file */
// let fs=require('fs')
// let appendFile=(file,contentToAppend)=>{
// fs.appendFile(file,contentToAppend,(err)=>{
//     if(err){
//         console.error('error appending to file:',err)
//         return;
//     }
 
//     console.log('content successfully append to file.')
// }
// )
// }
//  let fileName2="two2.txt"
//  let someContent='\n\n good day'


// appendFile(fileName2,someContent)

///*******************************************************delete file */
// let fs=require('fs')
// let deleteFile=(file)=>{
//     fs.unlink(file,(err)=>{
//         if(err){
//             console.log('error deleting file',err)
//             return
//         }
//         console.log('content successfully appended to file')
//     })
// }
// let fileName2="two2.txt"

// deleteFile(fileName2)

