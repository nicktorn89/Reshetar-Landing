<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['form__phone'])) {
        if (isset($_POST['form__phone'])) {
            if (!empty($_POST['form__phone'])) {
                $phone_for_title = strip_tags($_POST['form__phone']);
                $uphone = strip_tags($_POST['form__phone']) . "<br>";
                $uphoneFieldset = "<b>Телефон:</b>";
            }
        }
        if (isset($_POST['form__servicetype'])) {
            if (!empty($_POST['form__servicetype'])) {
                $userviceType = strip_tags($_POST['form__servicetype']) . "<br>";
                $userviceTypeFieldset = "<b>Вид услуги:</b>";
            }
        }
        if (isset($_POST['form__repetition'])) {
            if (!empty($_POST['form__repetition'])) {
                $urepetition = strip_tags($_POST['form__repetition']) . "<br>";
                $urepetitionFieldset = "<b>Репетиция:</b>";
            }
        }
        if (isset($_POST['form__earlyDeparture'])) {
            if (!empty($_POST['form__earlyDeparture'])) {
                $uearlyDeparture = strip_tags($_POST['form__earlyDeparture']) . "<br>";
                $uearlyDepartureFieldset = "<b>Ранний выезд:</b>";
            }
        }
        if (isset($_POST['form__guestMakeup'])) {
            if (!empty($_POST['form__guestMakeup'])) {
                $uguestMakeup = strip_tags($_POST['form__guestMakeup']) . "<br>";
                $uguestMakeupFieldset = "<b>Причёска/макияж для гостей:</b>";
            }
        }

        $to = "ekaterinareshetar@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
        $sendfrom = "wedding.reshetar.ru"; /*Укажите адрес, с которого будет приходить письмо */
        $headers = "From: " . strip_tags($sendfrom) . "\r\n";
        $headers .= "Reply-To: " . strip_tags($sendfrom) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
        $headers .= "Content-Transfer-Encoding: 8bit \r\n";
        $subject = "Заявка от $phone_for_title";
        $message = "$uemailFieldset $uemail
                $uphoneFieldset $uphone
                $unameFieldset $uname
                $userviceTypeFieldset $userviceType
                $urepetitionFieldset $urepetition
                $uearlyDepartureFieldset $uearlyDeparture
                $uguestMakeupFieldset $uguestMakeup
                ";

        $send = mail($to, $subject, $message, $headers);

    } else {
        header('HTTP/1.1 403 Bad Request', true, 403);
    }
} else {
    header("Location: https://reshetar.ru");
}
