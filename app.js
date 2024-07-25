import validator from 'validator'
import fs from 'fs'
import { upperCase } from 'upper-case'


fs.readFile('file1.txt','utf-8',(err,data)=>{

if(validator.isUppercase(data)){
    console.log(`data is already in uppercase`)
}else{
    let d=upperCase(data);
    fs.writeFileSync('file2.txt',d)
}
})
