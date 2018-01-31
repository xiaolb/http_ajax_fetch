

var input = 'http://tubobo-express.qafc.ops.com/storeManage/express/detail'
var opts = {
    method: 'POST',
    headers: {
        "content-type": "application/json",
        "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTczNzQ2MTksImp0aSI6IjhhZDlkNjAyN2ZjNDQwZjQ5MWNkNTE5NmM5OGZiY2IwIn0.kk61cgrUs89ktI4sJkSJlwBBj0yDQg1exs1JjhmLzFo'
    },
    credentials: 'include',
    // body:JSON.stringify({'waybillNo':'12312313213"}),
    timeout: 2,
}

function fetchRequest () {
    fetch(input, opts).then(function (response) {
        console.log(response)
        return response.json()
    }).then(function (a) {
        console.log(a)
        console.log(1111)
    })
}

// function _fetch(requestPromise, timeout=30000) {
//     let timeoutAction = null;
//     const timerPromise = new Promise((resolve, reject) => {
//             timeoutAction = () => {
//             alert('请求超时fetch');
//             reject(new Error("fetch timeout"))
//         }
//     })
//     setTimeout(()=>{
//         timeoutAction()
//     }, timeout)
//     return Promise.race([requestPromise,timerPromise]);
// }

// function post(timeOut) {
//     const myFetch =
//         fetch(input,opts)
//     return new Promise((resolve, reject) => {
//             _fetch(myFetch, timeOut)
//             .then((response) => {
//                     return response.json()
//             })
//             .then((responseData)=>{
//                 console.log(responseData)
//             })
//             .catch(error=>{
//                 console.log('网络错误？')
//                 reject(error);
//             })
//     })
// }

// var oldFetchfn = fetch; //拦截原始的fetch方法
// window.fetch = function(){//定义新的fetch方法，封装原有的fetch方法
//     return new Promise(function(resolve, reject){
//         var flagTimeout = true
//         var timeoutId = setTimeout(function(){
//                 flagTimeout = false
//                 reject(new Error("fetch timeout"))
//             }, opts.timeout);
//         oldFetchfn(input, opts).then(
//             res=>{
//                 clearTimeout(timeoutId);
//                 resolve(res)
//                 return res.json()
//             },
//             err=>{
//                 clearTimeout(timeoutId);
//                 reject(err)
//             }
//         ).then(response => {
//             if(flagTimeout) {
//                 console.log(response)
//             }else{
//                 console.log("超时了")
//             }
//         })
//     })
// }

