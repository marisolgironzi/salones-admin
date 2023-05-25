<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $sql="INSERT INTO usuarios (nombre, apellido, usuario, cont_usuario, id_categoria) VALUES (:nombre, :apellido, :usuario, :cont_usuario, :id_categoria)";

        $stmt=$pdo->prepare($sql);
        $stmt->bindValue('nombre',$_POST['nombre']);
        $stmt->bindValue('apellido',$_POST['apellido']);
        $stmt->bindValue('usuario',$_POST['usuario']);
        $stmt->bindValue('cont_usuario',$_POST['cont_usuario']);
        $stmt->bindValue('id_categoria',$_POST['id_categoria']);
        $stmt->execute();

        $id_usuario=$pdo->lastInsertId();

        if($id_usuario){
            header("HTTP/1.1 200 OK");
            echo json_encode($id_usuario);
        }
        exit;
    }

?>