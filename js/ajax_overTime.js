
var xmlhttp = null;
function myajax(time) {

    //1、创建XMLHttpRequest对象
    //2、需要针对IE和其它浏览器建立这个对象的不同方式写不同的代码
    xmlhttp = new XMLHttpRequest();

    //注册回调函数。注意注册回调函数是不能加括号,加了会把函数的值返回给onreadystatechange
    xmlhttp.onreadystatechange = callback;
    setTimeout(checkRequest,time)
    //设置连接信息
    //第一个参数表示http请求方式,支持所有http的请求方式,主要使用get和post
    //第二个参数表示请求的url地址,get方式请求的参数也在urlKh
    //第三介参数表示采用异步还是同步方式交互,true表示异步

    //异步方式下,send这句话立即完成执行
    // POST方式请求的代码，在跑的时候需要自己添加接口和请求的参数
    xmlhttp.open("POST","http://tubobo-express.qafc.ops.com/storeManage/express/detail",true);
    // POST方式需要自己设置http的请求头
    xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    // POST方式设置token
    xmlhttp.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTczNzQ2MTksImp0aSI6IjhhZDlkNjAyN2ZjNDQwZjQ5MWNkNTE5NmM5OGZiY2IwIn0.kk61cgrUs89ktI4sJkSJlwBBj0yDQg1exs1JjhmLzFo");
    // POST方式发送数据
    xmlhttp.send();
}

//回调函数
function callback() {
    //判断对象的状态是交互完成

    if (xmlhttp.readyState == 4) {
        //判断http的交互是否成功
        if (xmlhttp.status == 200) {
            //获取服务器端返回的数据
            //获取服务器端输出的纯文本数据
            var responseText = xmlhttp.responseText;
            console.log(responseText);
        }
    }
}

function checkRequest(){
    //为4时代表请求完成了

    if(xmlhttp.readyState!=4){
        alert('响应超时');
        //关闭请求
        xmlhttp.abort();
    }
}