<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='PUT'){
        $sql="UPDATE usuarios SET nombre=:nombre, apellido=:apellido, usuario=:usuario, cont_usuario=:cont_usuario, id_categoria=:id_categoria WHERE id_usuario=:id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombre', $_GET['nombre']);
        $stmt->bindValue(':apellido', $_GET['apellido']);
        $stmt->bindValue(':usuario', $_GET['usuario']);
        $stmt->bindValue(':cont_usuario', $_GET['cont_usuario']);
        $stmt->bindValue(':id_categoria', $_GET['id_categoria']);
        $stmt->execute();       
        header("HTTP/1.1 200 OK");
        exit;
    }

?>