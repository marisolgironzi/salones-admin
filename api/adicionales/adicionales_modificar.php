<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='PUT'){
        $sql="UPDATE adicionales SET nombre_adicional=:nombre_adicional WHERE id_adicional=:id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombre_adicional', $_GET['nombre_adicional']);
        $stmt->bindValue(':id_servicio', $_GET['id_servicio']);
        $stmt->bindValue(':id', $_GET['id']);
        $stmt->execute();       
        header("HTTP/1.1 200 OK");
        exit;
    }

?>