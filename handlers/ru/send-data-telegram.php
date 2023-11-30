<?php

$day = $_POST['day'];
$partner_day = $_POST['partner_day'];
$partner_month = $_POST['partner_month'];
$partner_year = $_POST['partner_year'];
$partner_city = $_POST['partner_city'];
$partner_name = $_POST['partner_name'];
$month = $_POST['month'];
$year = $_POST['year'];
$city = $_POST['city'];
$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$token = "6410921195:AAEh7pxALn97Na1SycTmIz8lIEelRqoeF4A";
$chat_id = "-1001992313757";
$arr = array(
  'ДР: ' => $day,
  'МР: ' => $month,
  'ГР: ' => $year,
  'Город: ' => $city,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'ДР партнера: ' => $partner_day,
  'МР партнера: ' => $partner_month,
  'ГР партнера: ' => $partner_year,
  'Город партнера: ' => $partner_city,
  'Имя партнера: ' => $partner_name,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  // header('Location: success.html');
  header('Location: ../../ru.html');
} else {
  echo "Error";
}
?>