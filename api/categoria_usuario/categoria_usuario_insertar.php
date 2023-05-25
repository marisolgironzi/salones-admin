<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $sql="INSERT INTO categoria_usuario (nombre_categoria) VALUES (:nombre_categoria)";

        $stmt=$pdo->prepare($sql);
        $stmt->bindValue('nombre_categoria',$_POST['nombre_categoria']);
        $stmt->execute();

        $id_categoria=$pdo->lastInsertId();

        if($id_categoria){
            header("HTTP/1.1 200 OK");
            echo json_encode($id_categoria);
        }
        exit;
    }

?>