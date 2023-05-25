<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $sql="INSERT INTO clientes (nombre, apellido, mail, telefono) VALUES (:nombre, :apellido, :mail, :telefono)";

        $stmt=$pdo->prepare($sql);
        $stmt->bindValue('nombre',$_POST['nombre']);
        $stmt->bindValue('apellido',$_POST['apellido']);
        $stmt->bindValue('mail',$_POST['mail']);
        $stmt->bindValue('telefono',$_POST['telefono']);
        $stmt->execute();

        $id_cliente=$pdo->lastInsertId();

        if($id_cliente){
            header("HTTP/1.1 200 OK");
            echo json_encode($id_cliente);
        }
        exit;
    }

?>