$('#subText').click(function () {
    alert(1);
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    date = month+1+'/'+day+'/'+year;
    $.ajax({
        type:'post',
        url:'/add/do',
        dataType:'json',
        data:{
            tit:$('section.content .field-wrap input').eq(0).val(),
            author:$('section.content .field-wrap input').eq(1).val(),
            tags:$('section.content .field-wrap input').eq(2).val(),
            content:$('section.content .field-wrap iframe').contents().find('p').html(),
            time:date
        },
        success:function (re) {
            console.log(JSON.stringify(re));
        },
        error:function (er) {
            console.log(JSON.stringify(er));
        }
    })
})
$('#myTable').delegate('.del-btn','click',function () {
    var getId = $(this).attr('id-data');
    var _this = $(this);
    var conf=confirm('你真的确定要删除吗？');
    if (conf){
        $.ajax({
            type:'post',
            url:'admin/del',
            dataType:'json',
            data: {
                id: getId
            },
            success:function (re) {
                if(re.code == 3){
                    _this.closest('tr').remove();
                }
            },
            error:function (err) {

            }
        })
    }
})
$('#aaaa').click(function () {
    alert(1);
    $('#asd iframe').contents().find('p').html('asdasdasdas');
})
