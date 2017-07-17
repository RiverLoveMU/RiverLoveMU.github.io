<?php
	header("Content-type:text/html;charset=utf-8");
	if($connect=mysqli_connect('localhost', 'root', '')){
		if($db = mysqli_select_db($connect, 'student')){
			$name=$_GET['name'];
			$age=$_GET['age'];
			$sex=$_GET['sex'];
			$score=$_GET['score'];
			mysqli_set_charset($connect, 'utf8');
			if($insert=mysqli_query($connect, "insert into infor (name,age,sex,score) values ('$name','$age','$sex','$score')")){
				echo '提交成功';
			}
		}else{
			echo '选择数据库失败';
		}
	}else{
		echo '数据库失败';
	}
//	echo $_GET['name'].$_GET['age'].$_GET['sex'].$_GET['score'];
?>