<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $sql="INSERT INTO reservas (id_cliente, id_salon, id_evento, id_adicional, mes, anio, detalles) VALUES (:id_cliente, :id_salon, :id_evento, :id_adicional, :mes, :anio, :detalles)";

        $stmt=$pdo->prepare($sql);
        $stmt->bindValue('id_cliente',$_POST['id_cliente']);
        $stmt->bindValue('id_salon',$_POST['id_salon']);
        $stmt->bindValue('id_evento',$_POST['id_evento']);
        $stmt->bindValue('id_adicional',$_POST['id_adicional']);
        $stmt->bindValue('mes',$_POST['mes']);
        $stmt->bindValue('anio',$_POST['nombre_evento']);
        $stmt->bindValue('detalles',$_POST['detalles']);
        $stmt->execute();

        $id_reserva=$pdo->lastInsertId();

        if($id_reserva){
            header("HTTP/1.1 200 OK");
            echo json_encode($id_reserva);
        }
        exit;
    }

?>