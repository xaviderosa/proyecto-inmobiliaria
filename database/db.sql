CREATE DATABASE inmobiliaria;

use inmobiliaria;

DROP TABLE IF EXISTS propietarios;

CREATE TABLE propietarios (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    localidad VARCHAR(50) NOT NULL,
    mail VARCHAR(50) NOT NULL
);