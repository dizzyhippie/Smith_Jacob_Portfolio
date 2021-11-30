<?php
//FOR DEBUG ONLY MUST REMOVE AFTER
//ini_set('display_errors', 1);

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');
$results = [];
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';

if (isset($_POST['firstname'])) {
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['lastname'])) {
    $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])) {
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
}

if (isset($_POST['message'])){
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
}

//Store the results
$results['name'] = $visitor_name;
$results['message'] = $visitor_message;

//Prepare the email
$email_subject = 'Inquiry from Portfolio Contact Form'; //Subject line of the email
$email_recipient = 'jacob.regsmith@gmail.com'; //Send to my email
$email_message = sprintf('Name: %s, Email: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message);

$email_headers = array(
    //This is best pracrtice but may need you to have mail setup at noreply@mindofjacob.ca
    //'From'=>'noreply@mindofjacob.ca',
    //'Reply-To'=>$visitor_email,

    //You can still use this method
    'From'=>$visitor_email
);


//Send out the Email
//Code must be run in PHP 7.4 or above
$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);
if($email_result){
    $results['message'] = sprintf('Thanks for the email, We will get back to you within 24 hours', $visitor_name);
}else{
    $results['message'] = sprintf('Sorry! The email did not go through.');
}


echo json_encode($results);