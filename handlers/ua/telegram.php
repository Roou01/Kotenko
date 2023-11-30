<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$partner_data = $_POST['partner_data'];
$question = $_POST['question'];
$token = "6410921195:AAEh7pxALn97Na1SycTmIz8lIEelRqoeF4A";
$chat_id = "-1001992313757";

if ($partner_data !== null){
  $arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
    'Данные партнера' => $partner_data,
    
  );
} elseif ($question !== null){
  $arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
    'Заданный вопрос' => $question,
    
  );
} else {
  $arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email
  );
  
}



foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../../index.html');
} else {

  echo "Error";
}

?>