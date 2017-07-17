<?php
	header('Content-type:text/html;charset=utf-8');
//	1，连接数据库
	if($connect = mysqli_connect('localhost','root','')){
		echo '连接成功';
	}else{
		echo '连接失败';
	}
//	2,选择数据库
	if($db = mysqli_select_db($connect,'students')){
		echo '</br>数据库已经打开';
	}else{
		echo '</br>数据库打开失败';
	}
//	3，通过PHP执行sql语句，操作数据库
    mysqli_set_charset($connect,'utf8');
	mysqli_query($connect, 'INSERT INTO students (name, sex, age, score) VALUES ("张三","male",18,100)');
?>