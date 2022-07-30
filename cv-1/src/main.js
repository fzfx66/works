//思路：写代码切忌一口气吃个胖子，应逐步拆分，步步细化，一点点的去实现，从而搭建起整个项目。
//可以先用最简单的最笨的方式和语法把功能实现，再来逐步优化。
//新手尽量用注释把思路写下来。

//substring取0→n
//word = word.replace(/\n/g,'<br>')          //正则表达式，将所有\n都转换
//用setinterval取代settimeout，持续执行.但是老手用递归的settimeout,但是老手用递归的settimeout


let html = document.querySelector('#demo');  //qS通过css选择器找到这个元素
let style = document.querySelector('#style');

let n = 0;
let word_add = ''
let word = `
/* 你好，我叫罗贤康，
* 这里展现一下我的前端功底
* 现在准备一个div*/

body{
    color:red;
}
#div1{
    border:1px solid red;
    width:500px;
    height:500px;
    position:fixed;
    right:20px;
    top:20px;
}
/*现在把div变成一个八卦*/

#div1{
    border-radius:50%;
    
}

# div2{
width:250px;
    height:500px;
    position:fixed;
    right:20px;
    top:20px;
}

#div2_1{
    border:1px solid green;
    width:500px;
    height:500px;
    position:fixed;
    right:20px;
    top:20px;
    border-radius:50%;
    overflow:hidden;
    background:black;
}
`;

let step = () => {
    setTimeout(() => {
        //是回车不照搬，不是回车照搬
        if (word[n] === '\n') {
            word_add += '<br>'
        } else if (word[n] === '') {
            word_add += '&nbsp;'
        } else {
            word_add += word[n]
        }

        html.innerHTML = word_add
        style.innerHTML = word.substring(0, n)
        n += 1
        if (n < word.length) {
            step()
        }
    }, 10)
}

step()

