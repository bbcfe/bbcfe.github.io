<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
<?php
$to = 'contact@socialengineeringhelp.com';
$subject = 'Customer Query';
$message = "";
$from = $_POST["email"];
if(mail($to,$subject,$message)){
	echo 'Email sent correctly';
}else {
	echo 'Unable to send email.';
}

</body>
</html>