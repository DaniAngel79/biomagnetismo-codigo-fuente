<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Obtener datos
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name    = strip_tags(trim($data["name"] ?? $data["nombre"] ?? "Usuario Web"));
    $email   = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $phone   = strip_tags(trim($data["phone"] ?? $data["telefono"] ?? "No provisto"));
    $message = strip_tags(trim($data["message"] ?? $data["mensaje"] ?? ""));

    // 2. Destinatarios (AMBOS LUGARES)
    // Se separan por coma para que llegue a la casilla de Hostinger y a tu Gmail personal
    $to = "contacto@biomagnetismo.store, patricioangelray@gmail.com"; 
    $subject = "=?UTF-8?B?".base64_encode("Nuevo contacto: $name")."?=";
    
    // 3. Cuerpo del mensaje
    $body = "<html><body style='font-family: Arial, sans-serif;'>";
    $body .= "<h2>Nuevo mensaje desde Biomagnetismo Store</h2>";
    $body .= "<p><strong>Nombre:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Teléfono:</strong> $phone</p>";
    $body .= "<p><strong>Mensaje:</strong><br>$message</p>";
    $body .= "</body></html>";

    // 4. Cabeceras
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Biomagnetismo Store <contacto@biomagnetismo.store>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Envío
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Enviado correctamente"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error de envío"]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Acceso denegado"]);
}
?>