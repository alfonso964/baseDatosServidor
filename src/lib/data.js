'use server'

import { db } from '@/lib/db'

// ========== Alumnos ==========

// Alumnos - Base de Datos
export async function obtenerAlumnosDB(query) {
    const sql = 'SELECT * FROM alumnos WHERE nombre LIKE ?';
    const values = [`%${query}%`];
    const [alumnos] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000));
    return alumnos;
}

export async function obtenerAlumnoDB(id) {
    const sql = 'SELECT * FROM alumnos WHERE id = ?';
    const values = [id];
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000));
    return rows[0];
}

// Alumnos - API
export async function obtenerAlumnosAPI(query) {
    const response = await fetch('http://localhost:3002/alumnos');
    const alumnos = await response.json();

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000));
    return alumnos.filter(a => a.nombre.toLowerCase().includes(query.toLowerCase()));
}

export async function obtenerAlumnoAPI(id) {
    const response = await fetch('http://localhost:3002/alumnos/' + id);
    if (!response.ok) return null;
    const alumno = await response.json();

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000));
    return alumno;
}

// ========== Profesores ==========

// Profesores - Base de Datos
export async function obtenerProfesoresDB(query) {
    try {
        let profesores;
        if (query) {
            const sql = 'SELECT * FROM profesores WHERE nombre LIKE ? OR especialidad LIKE ? OR estadoCivil LIKE ?';
            const values = [`%${query}%`, `%${query}%`, `%${query}%`];
            const [result] = await db.query(sql, values);
            profesores = result;
        } else {
            const [result] = await db.query('SELECT * FROM profesores');
            profesores = result;
        }

        // Introducimos un retardo artificial
        await new Promise(resolve => setTimeout(resolve, 2000));
        return profesores;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export async function obtenerProfesorDB(id) {
    try {
        const sql = 'SELECT * FROM profesores WHERE id = ?';
        const values = [id];
        const [rows] = await db.query(sql, values);

        // Introducimos un retardo artificial
        await new Promise(resolve => setTimeout(resolve, 2000));
        return rows[0];
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Profesores - API
export async function obtenerProfesoresAPI(query) {
    const response = await fetch('http://localhost:3002/profesores');
    const profesores = await response.json();

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000));
    return profesores.filter(p => p.nombre.toLowerCase().includes(query.toLowerCase()));
}

export async function obtenerProfesorAPI(id) {
    const response = await fetch('http://localhost:3002/profesores/' + id);
    if (!response.ok) return null;
    const profesor = await response.json();

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000));
    return profesor;
}