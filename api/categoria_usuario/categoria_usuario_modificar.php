<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='PUT'){
        $sql="UPDATE categoria_usuario SET nombre_categoria=:nombre_categoria WHERE id_categoria=:id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombre_categoria', $_GET['nombre_categoria']);
        $stmt->bindValue(':id', $_GET['id']);
        $stmt->execute();       
        header("HTTP/1.1 200 OK");
        exit;
    }

?>