document.getElementById('editButton').addEventListener('click', function() {
    // Hacer que el párrafo sea editable
    document.getElementById('mensaje').setAttribute('contenteditable', 'true');
});

document.getElementById('sendButton').addEventListener('click', function() {
    // Obtener el contenido del párrafo
    const mensaje = document.getElementById('mensaje').innerText.trim();

    // Realizar la consulta a ChatGPT
    const apiKey = '';  // configurar la clave de API de forma segura
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const data = {
       // Modelo de procesamiento de lenguaje natural.
        model: "gpt-4",
        messages: [
            { role: "system", content: "" },
            // Mensaje del usuario, se espera que contenga el contenido de un mensaje previamente definido.
            { role: "user", content: mensaje }
        ]
    };

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        // Convierte el objeto 'data' en una cadena JSON para su posterior envío o almacenamiento.
        body: JSON.stringify(data)
    })
    .then(response => {
        // Verifica si la respuesta de la solicitud no es exitosa.
        if (!response.ok) {
             // Si la respuesta no es exitosa, lanza un error con el estado HTTP.
            throw new Error(`HTTP error! status: ${response.status}`);
        }
         // Si la respuesta es exitosa, la convierte a formato JSON y la devuelve.
        return response.json();
    })
    .then(data => {
        const respuestaChatGPT = data.choices[0].message.content;
        // Actualizar  la respuesta de ChatGPT
        document.getElementById('mensaje').innerText = respuestaChatGPT;
    })
    .catch(error => {
        console.error('error tu consulta', error);
        document.getElementById('mensaje').innerText = "Espera tu respuesta...";
    });

    // Deshabilitar la edición del párrafo
    document.getElementById('mensaje').setAttribute('contenteditable', 'false');
});
