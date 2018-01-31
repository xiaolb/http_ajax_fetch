
function myJqueryAjax(overTime) {
    overTime ? overTime : 1000
    var XMLHttpRequest = $.ajax({
        headers: {
            //Bearer是我的项目需要的,你可以按你的需求规范格式
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTczNzQ2MTksImp0aSI6IjhhZDlkNjAyN2ZjNDQwZjQ5MWNkNTE5NmM5OGZiY2IwIn0.kk61cgrUs89ktI4sJkSJlwBBj0yDQg1exs1JjhmLzFo',
        },
        type: "POST",
        contentType: 'application/json;charset=UTF-8',
        url: 'http://tubobo-express.qafc.ops.com/storeManage/express/detail',
        timeout: overTime,
        // data: JSON.stringify({'waybillNo':'12312313213"}),
        dataType:"JSON",
        ifModified: true,
        success: function (data) {
            console.log(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest, textStatus, errorThrown)
            if (textStatus=='timeout') {//超时,status还有success,error等值的情况
                XMLHttpRequest.abort();
                alert("超时");
            }
        }
    })
}