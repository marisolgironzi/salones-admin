<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,PUT");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='PUT'){
        $sql="UPDATE reservas SET id_cliente=:id_cliente, id_salon=:id_salon, id_evento=:id_evento, id_adicional=:id_adicional, mes=:mes, anio=:anio, detalles=:detalles WHERE id_reserva=:id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id_cliente', $_GET['id_cliente']);
        $stmt->bindValue(':id_salon', $_GET['id_salon']);
        $stmt->bindValue(':id_evento', $_GET['id_evento']);
        $stmt->bindValue(':id_adicional', $_GET['id_adicional']);
        $stmt->bindValue(':id_mes', $_GET['id_mes']);
        $stmt->bindValue(':id_anio', $_GET['id_anio']);
        $stmt->bindValue(':id_adicional', $_GET['id_adicional']);
        $stmt->bindValue(':id', $_GET['id']);
        $stmt->execute();       
        header("HTTP/1.1 200 OK");
        exit;
    }

?>