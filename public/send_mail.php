<?php
// Configuración de Seguridad
header("Access-Control-Allow-Origin: https://biomagnetismo.store"); // Restringido a tu dominio
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Manejo de Preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Obtención y limpieza profunda de datos
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Datos inválidos"]);
        exit();
    }

    $name    = htmlspecialchars(strip_tags(trim($data["name"] ?? $data["nombre"] ?? "Usuario Web")));
    $email   = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $phone   = htmlspecialchars(strip_tags(trim($data["phone"] ?? $data["telefono"] ?? "No provisto")));
    $message = nl2br(htmlspecialchars(strip_tags(trim($data["message"] ?? $data["mensaje"] ?? ""))));

    // Validación mínima
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Email no válido"]);
        exit();
    }

    // 2. Destinatarios
    $to = "contacto@biomagnetismo.store, patricioangelray@gmail.com"; 
    $subject = "=?UTF-8?B?".base64_encode("Consulta Web: $name")."?=";
    
    // 3. Cuerpo del mensaje con estilo profesional
    $body = "
    <html>
    <head>
      <title>Nueva Consulta</title>
    </head>
    <body style='font-family: sans-serif; color: #333; line-height: 1.6;'>
      <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;'>
        <h2 style='color: #059669;'>Nuevo mensaje desde la Web</h2>
        <hr style='border: 0; border-top: 1px solid #eee;'>
        <p><strong>Nombre:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Teléfono:</strong> $phone</p>
        <div style='background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;'>
            <strong>Mensaje:</strong><br>$message
        </div>
        <footer style='margin-top: 20px; font-size: 11px; color: #999;'>
            Enviado desde el formulario oficial de biomagnetismo.store
        </footer>
      </div>
    </body>
    </html>";

    // 4. Cabeceras optimizadas para evitar SPAM
    $headers = [
        'MIME-Version' => '1.0',
        'Content-type' => 'text/html; charset=UTF-8',
        'From' => 'Biomagnetismo Store <contacto@biomagnetismo.store>',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    ];

    // 5. Envío
    // En Hostinger, mail() requiere que el 'From' sea una cuenta creada en el hosting.
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mensaje recibido con éxito"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "El servidor no pudo enviar el correo"]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>