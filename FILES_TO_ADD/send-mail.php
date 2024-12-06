<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php'; 

// Перевіряємо, чи була відправлена ​​форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Зчитуємо JSON дані з тіла запиту
    $data = json_decode(file_get_contents('php://input'), true); 

    // Задаємо змінні для даних форми
    $formName = !empty($data['formName']) ? $data['formName'] : 'Відсутня тема листа';
    $welcome ='Вітаю, у вас новий запит!';
    $name = !empty($data['userName']) ? "<b>Ім'я: </b>". $data['userName'] ."<br>" : 'Помилка в формі з полем name'; 
    $phone = !empty($data['userPhone']) ? "<b>Телефон: </b>". $data['userPhone'] ."<br>" : 'Помилка в формі з полем phone';
    $message = !empty($data['userComment']) ? "<b>Коментар:</b> ". $data['userComment'] ."<br>" : 'Коментар не дадано до форми';
    $connect = !empty($data['userConnect']) ? "<b>Бажано комунікувати через:</b> ". $data['userConnect'] ."<br>" : 'Помилка в формі з полем connect';

    // Створюємо новий об'єкт PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'PHPMailer/language/');
    $mail->IsHTML(true);

    // Налаштування SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'aptlyschool@gmail.com';
    $mail->Password = 'jhpj bluv byzr retp';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Від кого лист 
    $mail->setFrom('aptlyschool@gmail.com', ' - Заявка');

    // Кому лист
    $mail->addAddress('aptlyschool@gmail.com', ' APTLY');

    // Тема листа
    $mail->Subject = $formName;

    // Тіло листа
    $mail->Body =
    '<p><strong><h3>'.$welcome.'</h3></strong></p>'.
    '<p>'.$name.' </p>'.
    '<p>'.$phone.'</p>'.
    '<p>'.$connect.'</p>'.
    '<p>'.$message.'</p>';

    // Надсилаємо лист
    if ($mail->send()) {
        echo 'Ваше повідомлення надіслане!';
    } else {
        echo 'Виникла помилка, сбробуй ще раз :) : ' . $mail->ErrorInfo;
    }
}
?>
