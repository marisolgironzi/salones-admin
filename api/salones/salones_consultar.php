<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='GET'){

        //Por id_salon

        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM salones WHERE id_salon=:id");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM salones");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }


        //Por nombre_salon
        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM salones WHERE nombre_salon=:nombre_salon");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM salones");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }

        //Por capacidad
        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM salones WHERE capacidad_desde=:capacidad_desde AND capacidad_hasta=:capacidad_hasta");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM salones");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }

    }

?>