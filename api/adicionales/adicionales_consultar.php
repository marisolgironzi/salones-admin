<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='GET'){

        //POR ID

        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM adicionales WHERE id_adicional=:id");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM adicionales");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }


        //POR NOMBRE
        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM adicionales WHERE nombre_adicional=:nombre_adicional");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM adicionales");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }

    }

?>