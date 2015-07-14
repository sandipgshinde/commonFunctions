<?php
function generateTimeZone(){
		$ipaddress = false;
		$GLOBALS['timeZone'] = 'America/Los_Angeles';
		if (isset($_SERVER['HTTP_CLIENT_IP']))
			$ipaddress = $_SERVER['HTTP_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
			$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_X_FORWARDED']))
			$ipaddress = $_SERVER['HTTP_X_FORWARDED'];
		else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
			$ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_FORWARDED']))
			$ipaddress = $_SERVER['HTTP_FORWARDED'];
		else if(isset($_SERVER['REMOTE_ADDR']))
			$ipaddress = $_SERVER['REMOTE_ADDR'];
		
		if($ipaddress !== FALSE){
			$query = @unserialize(file_get_contents('http://ip-api.com/php/'.$ipaddress));
			if($query && $query['status'] == 'success' && isset($query['timezone'])){
			$GLOBALS['timeZone'] = $query['timezone'];
			}
		}
    }
?>    
	