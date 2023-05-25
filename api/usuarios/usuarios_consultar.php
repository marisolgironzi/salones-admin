<?php

    include 'conexiondb.php';
    $pdo=new conexion();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if($_SERVER['REQUEST_METHOD']=='GET'){

        //Por id_usuario

        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM usuarios WHERE id_usuario=:id");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM usuarios");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }


        //Por nombre y apellido
        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM usuarios WHERE nombre=:nombre AND apellido=:apellido");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM usuarios");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }

        //Por usuario
        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM usuarios WHERE usuario=:usuario");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM usuarios");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }

        //Por id_categoria
        if(isset($_GET['id'])){
            $sql=$pdo->prepare("SELECT * FROM usuarios WHERE usuario=:usuario");
            $sql->bindValue(':id',$_GET['id']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }
        else{
            $sql=$pdo->prepare("SELECT * FROM usuarios");
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
            exit;
        }

    }

?>