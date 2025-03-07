// worker.js
self.onmessage = function(event) {
    const { token } = event.data;
    // Aquí puedes realizar cualquier procesamiento con el token
    // Por simplicidad, asumimos que cualquier token no vacío es válido
    const isValid = token && token.length > 0;
    self.postMessage({ success: isValid });
};