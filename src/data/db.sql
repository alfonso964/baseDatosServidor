DROP DATABASE IF EXISTS escuela;

CREATE DATABASE escuela;
USE escuela;

-- Tabla alumnos
CREATE TABLE alumnos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fechaNacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla profesores
CREATE TABLE profesores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(200),
    estadoCivil VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Datos de ejemplo
INSERT INTO alumnos (nombre, localidad, fechaNacimiento) 
VALUES 
  ('Juan Pérez', 'Madrid', '2005-03-15'),
  ('María García', 'Barcelona', '2006-07-22'),
  ('Carlos López', 'Valencia', '2005-11-08');

INSERT INTO profesores (nombre, especialidad, estadoCivil) 
VALUES 
  ('Ana Martínez', 'Matemáticas', 'Casada'),
  ('Pedro Sánchez', 'Lengua', 'Soltero'),
  ('Laura Gómez', 'Ciencias', 'Divorciada');