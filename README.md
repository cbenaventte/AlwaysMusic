# AlwaysMusic

Descripción
La escuela de música Always Music es reconocida en la ciudad por graduar a grandes
músicos de reconocimiento mundial, sin embargo, a pesar de lo mucho que ha crecido con
el tiempo, nunca dejaron de utilizar excel como base de datos y han decidido cambiar esto
por un desarrollo personalizado.
En este desafío deberás desarrollar una aplicación en Node que realice consultas a
PostgreSQL con el paquete “pg” para:
● Agregar un nuevo estudiante.
● Consultar los estudiantes registrados.
● Consultar estudiante por rut.
● Actualizar la información de un estudiante.
● Eliminar el registro de un estudiante.
Ya que el caso se trata de un proceso de desarrollo, la interacción la debes realizar con
argumentos por la línea de comandos.
Antes de iniciar este desafío deberás crear una base de datos y una tabla con las siguientes
columnas:
● Nombre
● Rut
● Curso
● Nivel
Requerimientos
1. Realizar la conexión con PostgreSQL con la clase Client.
2. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.
3. Crear una función asíncrona para obtener por consola el registro de un estudiante
por medio de su rut.
4. Crear una función asíncrona para obtener por consola todos los estudiantes
registrados.
5. Crear una función asíncrona para actualizar los datos de un estudiante en la base de
datos.
6. Crear una función asíncrona para eliminar el registro de un estudiante de la base de
datos.
