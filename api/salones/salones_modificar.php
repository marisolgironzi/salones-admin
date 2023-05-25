<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='PUT'){
        $sql="UPDATE salones SET nombre_salon=:nombre_salon, capacidad_desde=:capacidad_desde, capacidad_hasta=:capacidad_hasta, id_servicio=:id_servicio WHERE id_salon=:id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombre_salon', $_GET['nombre_salon']);
        $stmt->bindValue(':capacidad_desde', $_GET['capacidad_desde']);
        $stmt->bindValue(':capacidad_hasta', $_GET['capacidad_hasta']);
        $stmt->bindValue(':id_servicio', $_GET['id_servicio']);
        $stmt->execute();       
        header("HTTP/1.1 200 OK");
        exit;
    }

?>