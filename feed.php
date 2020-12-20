<?php
$UI=POST['gamefeedback'];
$Ludo=POST['ludo'];
$Uno=POST['uno'];
$Hangman=POST['hangman'];
$Remarks=POST['remarks'];
if(!empty($UI) || !empty($Ludo) || !empty($Uno) || !empty($Hangman) || !empty($Remarks)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword ="";
    $conn = new mysqli($host,$dbUsername,$dbPassword);
    
    if(mysqli_connect_error()){
        die('Connect Error ('.mysqli_connect_error().')'.mysqli_connect_error());
    }
    else{
        $SELECT "SELECT Remarks from feed where Remarks=? Limit=1";
        $INSERT = "INSERT into feed (gamefeedback,ludo,uno,hangman,remarks) values(?,?,?,?,?)";
        $stmt= $conn->prepare($SELECT);
        $stmt->bind_param("g","$Remarks");
        $stmt->execute();
        $stmt->store_result();
        $rnum= $stmt->num_rows;
        if($rnum==0){
            $stmt->close();
            $stmt=$conn->prepare($INSERT);
            $stmt->bind_param("sssi",$UI,$Ludo,$Uno,$Hangman,$Remarks);
            $stmt->execute();
            echo "Your feedback is registered";
        }
        else{
            echo "you have already sent the feedback";
        }
        $stmt->close();
        $conn->close();
    }
}
else{
    echo All fields are required;
    die();
}
?>