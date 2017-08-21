$('#public').on('click',function(){
	if($('#blogPublic input').eq(0).val()==''){
		alert('标题不能为空');
		return false;
	}
	if($('#blogPublic input').eq(1).val()==''){
		alert('作者名称不能为空');
		return false;
	}
	$.ajax({
		type:"post",
		url:"/admin/get",
		dataType:'json',
		data:{
			'title':$('#blogPublic input').eq(0).val(),
			'author':$('#blogPublic input').eq(1).val(),
			'time':$('#blogPublic input').eq(2).val(),
			'content':$('#blogPublic textarea').val()
		},
		success:function(result){
			console.log(JSON.stringify(result));
		},
		error:function(err){
			console.log(1);
			console.log(JSON.stringify(err));
		}
	});
})

//后台列表的请求
//$.ajax({
//	type:'get',
//	url:'http://yooye.top/phpBlog/admin/list.php',
//	dataType:'json',
//	success:function(result){
//		if(result.code==0){
//			var str='';
//			console.log(result.data.length);
//			for(var i=0;i<result.data.length;i++){
//				str+='<tr>'
//	          			+'<td>'+result.data[i].title+'</td>'
//	          			+'<td>'+result.data[i].content+'</td>'
//	          			+'<td>'+result.data[i].author+'</td>'
//	          			+'<td>'+result.data[i].time+'</td>'
//	          			+'<td>'
//	          				+'<button class="btn btn-primary">编辑</button>'
//	          				+'<button class="btn btn-danger" data-id="'+result.data[i].id+'">删除</button>'
//	          			+'</td>'
//	          		+'</tr>'
//			};
//			$('#blogList .tB').html(str);
//		}
//	},
//	error:function(err){
//		console.log(2);
//		console.log(JSON.stringify(err));
//	}
//})
//
////后台列表删除按钮功能
$('#blogList').delegate('.btn-danger','click',function(){
	var _this=$(this);
	var dataId=$(this).attr('data-id');
	var conf=confirm('你真的确定要删除吗？');
	if(conf){
		$.ajax({
			type:'get',
			url:'/admin/del?id='+dataId,
			dataType:'json',
			success:function(re){
				if(re.code==0){
					_this.closest('tr').remove();
				}else{
					alert('删除失败，请重试');
				}
			},
			error:function(err){
				console.log(JSON.stringify(err));
			}
		})
	}
})
$('section.content .search').click(function () {
	var searchText = $('#searchBox').val();
	if(searchText == ''){
		alert('请从新输入');
		return false;
	}
	$.ajax({
		type:'post',
		url:'/admin/search',
		dataType:'json',
		data:{
			'st':searchText
		},
		success:function (re) {
            var str = '';
            for (i=0;i<re.length;i++) {
                str += '<tr>'
                    + '<td>' + re[i].tit + '</td>'
                    + '<td>' + re[i].detail + '</td>'
                    + '<td>' + re[i].author + '</td>'
                    + '<td>' + re[i].time + '</td>'
                    + '<td>'
                    + '<a class="btn btn-primary" href="/admin/change?id=' + re[i]._id + '">编辑</a>'
                    + '<button class="btn btn-danger" data-id="' + re[i]._id + '">删除</button>'
                    + '</td>'
                    + '</tr>'
            }
            console.log(str);
			$('#blogList .tB').html(str);
        },
		error:function (err) {
            console.log(JSON.stringify(err));
        }
	})
})
$('#changeText').click(function () {
	var myId = $(this).attr('id-data');
	console.log($('#blogPublic input').eq(0).val());
	$.ajax({
		type:'post',
		url:"/admin/save",
		dataType:'json',
		data:{
            'title':$('#blogPublic input').eq(0).val(),
            'author':$('#blogPublic input').eq(1).val(),
            'time':$('#blogPublic input').eq(2).val(),
            'content':$('#blogPublic textarea').val(),
			'id':myId
		},
		success:function (re) {
			if (re.code == 0 ){
				alert('修改成功');
			}
        },
		error:function (er) {
            console.log(JSON.stringify(er));
        }
	})
})
$('#next-btn').click(function () {
	var length = $('.sm-btn').length;
	var currentPage = window.location.search;
	var nextPage = 2;
	if (currentPage!=''){
		nextPage = parseInt(currentPage.split('=')[1])+1;
	}
	if (nextPage<=length) {
        window.location.search = 'page=' + nextPage;
    }else {
		alert('no more pages');
	}
})
$('#pre-btn').click(function () {
    var length = $('.sm-btn').length;
    var currentPage = window.location.search;
    var nextPage = 0;
    if (currentPage!=''){
        nextPage = parseInt(currentPage.split('=')[1])-1;
    }
    if (nextPage>0) {
        window.location.search = 'page=' + nextPage;
    }else {
        alert('no more pages');
    }
})