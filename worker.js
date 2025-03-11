
        // Crear un archivo y escribir datos en él
        async function createAndWriteFile() {
            try {
                // Solicitar acceso a un directorio
                const dirHandle = await window.showDirectoryPicker();
                
                // Crear un archivo llamado 'prueba.txt' en el directorio seleccionado
                const fileHandle = await dirHandle.getFileHandle('prueba.txt', { create: true });
                
                // Crear un stream de escritura
                const writableStream = await fileHandle.createWritable();
                
                // Escribir datos en el archivo
                await writableStream.write('aaa');
                
                // Cerrar el stream de escritura
                await writableStream.close();
                
                console.log('Archivo creado y datos escritos exitosamente.');
            } catch (err) {
                console.error('Error al crear o escribir en el archivo:', err);
            }
        }

        // Leer el contenido de un archivo
        async function readFile() {
            try {
                // Solicitar acceso a un directorio
                const dirHandle = await window.showDirectoryPicker();
                
                // Obtener el archivo llamado 'prueba.txt' en el directorio seleccionado
                const fileHandle = await dirHandle.getFileHandle('prueba.txt');
                
                // Obtener el archivo como un objeto File
                const file = await fileHandle.getFile();
                
                // Leer el contenido del archivo
                const text = await file.text();
                
                console.log('Contenido del archivo:', text);
            } catch (err) {
                console.error('Error al leer el archivo:', err);
            }
        }

        // Agregar un evento de clic al botón
        document.getElementById('createFileButton').addEventListener('click', async () => {
            await createAndWriteFile();
            await readFile();
        });