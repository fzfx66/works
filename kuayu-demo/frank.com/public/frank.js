
// CORS
// const request = new XMLHttpRequest()
// request.open('GET','http://qq.com:8888/friends.json')
// request.onreadystatechange = () => {
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.response)
//     }
// }

// request.send()



//JSONP
const random = 'frankJSONPCallbackName'+Math.random()

window[random] = (date) => {
    console.log(date)
}

const script = document.createElement('script')
script.src = `http://qq.com:8888/friends.js?functionName=${[random]}`

script.onload = () => {
    script.remove()
}

document.body.appendChild(script)