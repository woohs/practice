const fs=require('fs');   //fs是node.js的核心模块，不用下载安装，可以直接引入  
 
//1. fs.stat  检测是文件还是目录  fs.statSync()同步获取stats对象,通过返回值接收。
fs.stat('html.html',function(error,stats){
    if(error){
        console.log(error);
        return false;
    }
    console.log('文件：'+stats.isFile());
    console.log('目录：'+stats.isDirectory());
})


//6.fs.readdir 读取目录下第一级内容  把目录下面的文件和文件夹都获取到。  
fs.readdir('./',function(error,data){
  if(error){
      console.log(error);
      return false;
  }
  console.log(data);  //data是数组类型，包含文件夹以及文件的名字(只有第一级目录内容)。拿到一个文件夹下面的所有目录  
})

//9. fs.unlink删除文件  
// fs.unlink('index.txt',function(error){
//   if(error){
//       console.log(error);
//       return false;
//   }
//   console.log('删除文件成功');
// })
