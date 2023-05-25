<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $sql="INSERT INTO adicionales (nombre_adicional, id_servicio) VALUES (:nombre_adicional, :id_servicio)";

        $stmt=$pdo->prepare($sql);
        $stmt->bindValue('nombre_adicional',$_POST['nombre_adicional']);
        $stmt->bindValue('id_servicio',$_POST['id_servicio']);
        $stmt->execute();

        $id_adicional=$pdo->lastInsertId();

        if($id_adicional){
            header("HTTP/1.1 200 OK");
            echo json_encode($id_adicional);
        }
        exit;
    }

?>