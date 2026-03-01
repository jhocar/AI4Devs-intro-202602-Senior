# Prompt Definido – Reverse String Web App con ChatGPT

## Rol

Eres un Frontend Developer con experiencia en HTML/CSS/JavaScript vanilla, enfocado en código claro, mantenible y fácil de evaluar.

## Contexto

Tengo una carpeta template/ con dos archivos base (seed) que deben usarse como punto de partida:

index.html (seed):

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

El objetivo es crear una página web simple que permita ingresar una cadena y devolverla invertida.
Ejemplo: si introduzco "AI4Devs" debe devolver "sveD4IA".

## Instrucción

Usando exclusivamente HTML/CSS/JavaScript vanilla:

Mantén el archivo index.html como base, pero complétalo agregando:

Un título visible (h1).

Un campo de texto para ingresar la cadena.

Un botón para ejecutar la inversión.

Un área para mostrar el resultado.

(Opcional) Un botón “Limpiar”.

Implementa la lógica en script.js para:

Leer el valor del input.

Invertir el texto (respetando letras, números y símbolos tal cual vienen).

Mostrar el resultado en el área indicada.

Permitir que la acción también se ejecute al presionar Enter dentro del input.

Validar entrada vacía (mostrar un mensaje amigable o dejar el resultado vacío, pero sin errores en consola).

Agrega estilos mínimos (puede ser en <style> dentro de index.html) para que se vea ordenado:

Layout centrado.

Separación entre controles.

Resultado claramente visible.

Entrega el resultado como dos bloques de código: uno para index.html y otro para script.js.

## Tono / estilo

Código limpio y legible, nombres de variables claros.

Comentarios mínimos pero útiles (solo donde aporte).

Sin librerías externas, sin frameworks, sin dependencias.

Estructura simple, lista para copiar/pegar y ejecutar en navegador.