<?php
	header("Content-type:text/html;charset=utf-8");
	$connect = mysqli_connect('localhost','root','');
	if($connect){
		$db = mysqli_select_db($connect, 'students');
		if($db){
			mysqli_set_charset($connect, 'utf8');
			$name = $_GET['name'];
			$age = $_GET['age'];
			$sex = $_GET['sex'];
			$score = $_GET['score'];
			$insert = mysqli_query($connect, "insert into students (name,sex,age,score) values ('$name','$sex','$age','$score')");
			if($insert){
				echo '数据导入成功';
			}else{
				echo '数据导入失败';
			}
		}else{
			echo '未找到数据库';
		}
	}else{
		echo '未连接数据库';
	}
?>