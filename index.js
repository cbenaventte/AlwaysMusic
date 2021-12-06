const { Client } = require("pg");

//aqui obtenemos los argumentos por la linea de comandos
const args = process.argv.slice(2)
let argsInicial = args[0]
let args1 = args[1]
let args2 = args[2]
let args3 = args[3]
let args4 = args[4]


const config = {
    user: "postgres",
    host: "localhost",
    database: "AlwaysMusic",
    password: "1234",
    port: 5432,
};


const client = new Client(config);
client.connect();

//función asíncrona para registrar un nuevo estudiante en la base de datos
if (argsInicial == 'nuevo') {

    async function ingresar(nombre, rut, curso, nivel) {

        const res = await client.query(
            `insert into estudiantes (nombre, rut, curso, nivel) 
             values ('${nombre}', '${rut}','${curso}', '${nivel}') RETURNING *`
        );

        console.log(`Estudiante ${res.rows[0].nombre} agregado con exito`);

        client.end();
    }

    ingresar(args1, args2, args3, args4);
}

//función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.
if (argsInicial == 'rut') {

    async function consultarut(rut) {

        const res = await client.query(
            `SELECT * FROM estudiantes WHERE rut = '${rut}'`
        );

        console.log('Registros actual: ', res.rows);

        client.end();
    }

    consultarut(args1);

}

//función asíncrona para obtener por consola todos los estudiantes registrados.
if (argsInicial == 'consulta') {

    async function consultaall() {

        const res = await client.query(
            `SELECT * FROM estudiantes`
        );

        console.log('Registro actual: ', res.rows);

        client.end();
    }

    consultaall();

}


//función asíncrona para actualizar los datos de un estudiante en la base de datos
if (argsInicial == 'editar') {

    async function editar(nombre, rut, curso, nivel) {

        const res = await client.query(
            `UPDATE estudiantes SET nombre ='${nombre}', curso ='${curso}', nivel ='${nivel}' 
            WHERE rut ='${rut}' RETURNING *;`
        );

        console.log(`Estudiante ${res.rows[0].nombre} editado con éxito`);
    }
    editar(args1, args2, args3, args4);

}


//función asíncrona para eliminar el registro de un estudiante de la base de datos
if (argsInicial == 'eliminar') {

    async function eliminar(rut) {

const res = await client.query(
`DELETE FROM estudiantes WHERE rut = '${rut}' RETURNING *;`
);

console.log(`Registro de estudiante con rut ${res.rows[0].rut} editado con éxito`);
client.end();
}
eliminar(args1);

}

