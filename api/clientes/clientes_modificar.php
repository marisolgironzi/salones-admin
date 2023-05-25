<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='PUT'){
        $sql="UPDATE clientes SET nombre=:nombre, apellido=:apellido, mail=:mail, telefono=:telefono WHERE id_cliente=:id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombre', $_GET['nombre']);
        $stmt->bindValue(':apellido', $_GET['apellido']);
        $stmt->bindValue(':mail', $_GET['mail']);
        $stmt->bindValue(':telefono', $_GET['telefono']);
        $stmt->bindValue(':id', $_GET['id']);
        $stmt->execute();       
        header("HTTP/1.1 200 OK");
        exit;
    }

?>