/**
 * Created by daviddali on 16/07/2017.
 */

$(document).ready(function () {
    $("#listadoAlumnosEstaticos").DataTable({
        "data": listadoAlumnos,
        "columns": [
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "dni" }
        ]
    })

    $("#listadoAlumnosDinamicos").DataTable({
        "ajax": {
            "url": "http://localhost:28084/alumno/lista",
            "type": "GET",
            "dataSrc": ""
        },
        "columns": [
            { "data": "codigo" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "dni" }
        ]
    })

    $("#listadoEmpresaEmpleadoDinamicos").DataTable({
        "ajax": {
            "url": "http://localhost:28084/empresa/lista",
            "type": "GET",
            "dataSrc": ""
        },
        "columns": [
            { "data": "codigoEmpresa" },
            { "data": "ruc" },
            { "data": "nombre" },
            { "data": "listaEmpleados[<br>].codigoEmpleado" },
            { "data": "listaEmpleados[<br>].nombre" },
            { "data": "listaEmpleados[,<br> ].apellido" }
        ]
    })
});

var listadoAlumnos = [
    {
        "nombre": "David Dali",
        "apellido": "Susanibar Arce",
        "dni": 41765654
    },
    {
        "nombre": "Juan Carlos",
        "apellido": "Susanibar Arce",
        "dni": 43765654
    },
    {
        "nombre": "Mary Cielo",
        "apellido": "Susanibar Arce",
        "dni": 45765654
    },
    {
        "nombre": "Pablo david",
        "apellido": "Susanibar Matienzo",
        "dni": 15765654
    },
    {
        "nombre": "Albina Isidora",
        "apellido": "Arce Poma",
        "dni": 15765654
    }
];