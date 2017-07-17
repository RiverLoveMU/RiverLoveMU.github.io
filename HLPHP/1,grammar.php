<?php
	header("Content-type:text/html;charset=utf-8");
//	1，变量的声明与使用
//	变量命名的注意事项：
//	（1）变量名必须以$开头
//	（2）$后面的字符可以是，数字，字母，下划线
//	（3）不能以数字开头
	$name='yooye';
	$age=18;
//	2,打印内容与拼接字符的方式
	echo $name.$age;
//	3，变量的基本类型  ：字符串，整型，浮点型，布尔值，数组
	$arr = array('01'=>'张三丰','02'=>'张翠山','03'=>'张无忌');
	print_r($arr['01'].'</br>');
//	4,如果php代码中需要打印出中文字符，需要设置字符编码的格式，以及文档的类型
//	header("Content-type:text/html;charset=utf-8");
//	5,运算符 + - * %
//	  判断：> < >= <= == !=
	$add=1;
	echo $age+$add;
//	6,转义字符
//	echo "\n";
//	echo 111;
//	
//	echo 'Lu\'Yooye';
//	7,流程控制
	$bool=true;
	if(!$bool){
		echo '我进到了if判断里面';
	}else{
		echo '我进到了else里面';
	}
//	echo $arr.length;
	$i=0;
	while($i<10){
		$i=$i+1;
		echo $i.'</br>';
	}
?>