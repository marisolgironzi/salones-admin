<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $sql="INSERT INTO salones (nombre_salon, capacidad_desde, capacidad_hasta, id_servicio) VALUES (:nombre_salon, :capacidad_desde, :capacidad_hasta, :id_servicio)";

        $stmt=$pdo->prepare($sql);
        $stmt->bindValue('nombre_salon',$_POST['nombre_salon']);
        $stmt->bindValue('capacidad_desde',$_POST['capacidad_desde']);
        $stmt->bindValue('capacidad_hasta',$_POST['capacidad_hasta']);
        $stmt->bindValue('id_servicio',$_POST['id_servicio']);
        $stmt->execute();

        $id_salon=$pdo->lastInsertId();

        if($id_salon){
            header("HTTP/1.1 200 OK");
            echo json_encode($id_salon);
        }
        exit;
    }

?>