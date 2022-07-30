```
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}   //打印出6个6
```
#### 为什么上述代码会打印出6个6？
因为setTimeout()的存在，使得console.log(i)的执行存在延迟。当console.log(i)开始执行的时候，for循环已经完毕，此时i的值为6（最后当i=6判定i<6为false之后还会执行一次i++，但不会继续执行代码块），因此会打印出6个6。

<br>

#### 让上面代码打印 0、1、2、3、4、5 的方法？
将for循环与let结合，每次循环会多打出一个i。
```
for(let i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
} 
```
<br>

#### 除了使用 for let 配合，还有什么其他方法？
way1:传址传递，i的值会发生变化，但i值每次变化都会顺带调用一次函数，每次给i值分配的地址是独一无二的，通过地址调用函数，不受后来i值变化的影响。
```
var out =(i) => {
setTimeout(() => console.log(i),0)
}
for (var i=0;i<6;i++){
out(i)
}
```
way2：使用闭包。让变量在作用域中获得独立。
```
let i
for( i = 0; i<6; i++){
    let j = i
    setTimeout(()=>{
    console.log(j)
    },0)
}
```
