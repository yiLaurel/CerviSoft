<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $comentario = htmlspecialchars($_POST['comentario']);
    $fecha = date('Y-m-d H:i:s');
    
    
    if (empty($nombre) || empty($email) || empty($comentario)) {
        die('Por favor completa todos los campos del formulario.');
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Por favor ingresa un email válido.');
    }
    
   
    $nuevoComentario = [
        'nombre' => $nombre,
        'email' => $email,
        'comentario' => $comentario,
        'fecha' => $fecha
    ];
    
  
    $archivoComentarios = 'comentarios.txt';
    
 
    $comentarios = [];
    if (file_exists($archivoComentarios)) {
        $contenido = file_get_contents($archivoComentarios);
        $comentarios = json_decode($contenido, true) ?: [];
    }
    
   
    $comentarios[] = $nuevoComentario;
    
  
    file_put_contents($archivoComentarios, json_encode($comentarios));
    
   
    header('Location: index.html?comentario=exito#testimonios');
    exit;
} else {
   
    header('Location: index.html');
    exit;
}
?>