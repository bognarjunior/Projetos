<?php

function minhaMatriz($col) {
	$arr = '';
	for($i = 0; $i < $col; $i ++){
		$arr .= '0';
	}
	
	for($i = 0; $i < $col; $i ++) {
		$arr[0] = 1;
		$arr[$i] = 1;
		if($i > 1) {
			$x = $i -1;
			$arr[$x] = 0;
		}
		
		
		echo($arr);
		echo('<br/>');
	}
}

minhaMatriz(10);