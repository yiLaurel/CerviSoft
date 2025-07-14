<?php
$archivoComentarios = 'comentarios.txt';

if (file_exists($archivoComentarios)) {
    $contenido = file_get_contents($archivoComentarios);
    $comentarios = json_decode($contenido, true) ?: [];
    
    
    $comentariosRecientes = array_slice(array_reverse($comentarios), 0, 3);
    
    foreach ($comentariosRecientes as $comentario) {
        echo '<div class="testimonio">';
        echo '<p>"' . $comentario['comentario'] . '"</p>';
        echo '<p class="autor">-' . $comentario['nombre'] . '</p>';
        echo '</div>';
    }
} else {
    echo '<p>Aún no hay testimonios. ¡Sé el primero en comentar!</p>';
}


if (isset($_GET['comentario']) && $_GET['comentario'] === 'exito') {
    echo '<p style="text-align:center; color:green; grid-column:1/-1">¡Gracias por tu comentario!</p>';
}
?>