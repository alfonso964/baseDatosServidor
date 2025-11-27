'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'

// ========== ALUMNOS ==========

// Alumnos - API Actions
export async function nuevoAlumnoAPI(formData) {
    const alumno = {
        nombre: formData.get('nombre'),
        localidad: formData.get('localidad'),
        fechaNacimiento: formData.get('fechaNacimiento'),
        createdAt: new Date().toISOString()
    }

    const response = await fetch('http://localhost:3002/alumnos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(alumno),
    })

    revalidatePath('/alumnos-api')
    redirect('/alumnos-api')
}

export async function editarAlumnoAPI(formData) {
    const id = formData.get('id')
    const alumno = {
        nombre: formData.get('nombre'),
        localidad: formData.get('localidad'),
        fechaNacimiento: formData.get('fechaNacimiento')
    }

    const response = await fetch('http://localhost:3002/alumnos/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(alumno),
    })

    revalidatePath('/alumnos-api')
    redirect('/alumnos-api')
}

export async function eliminarAlumnoAPI(formData) {
    const id = formData.get('id')

    const response = await fetch('http://localhost:3002/alumnos/' + id, {
        method: 'DELETE',
    })

    revalidatePath('/alumnos-api')
}

// Alumnos - Database Actions
export async function nuevoAlumnoDB(formData) {
    const sql = 'INSERT INTO alumnos (nombre, localidad, fechaNacimiento) VALUES (?, ?, ?)'
    const values = [
        formData.get('nombre'),
        formData.get('localidad'),
        formData.get('fechaNacimiento')
    ]
    await db.query(sql, values)

    revalidatePath('/alumnos-db')
    redirect('/alumnos-db')
}

export async function editarAlumnoDB(formData) {
    const id = formData.get('id')
    const sql = 'UPDATE alumnos SET nombre = ?, localidad = ?, fechaNacimiento = ? WHERE id = ?'
    const values = [
        formData.get('nombre'),
        formData.get('localidad'),
        formData.get('fechaNacimiento'),
        id
    ]
    await db.query(sql, values)

    revalidatePath('/alumnos-db')
    redirect('/alumnos-db')
}

export async function eliminarAlumnoDB(formData) {
    const id = formData.get('id')
    const sql = 'DELETE FROM alumnos WHERE id = ?'
    const values = [id]
    await db.query(sql, values)

    revalidatePath('/alumnos-db')
}

// ========== PROFESORES ==========

// Profesores - API Actions 
export async function nuevoProfesorAPI(formData) {
    const profesor = {
        nombre: formData.get('nombre'),
        especialidad: formData.get('especialidad'),
        estadoCivil: formData.get('estadoCivil'),
        createdAt: new Date().toISOString()
    }

    const response = await fetch('http://localhost:3002/profesores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profesor)
    })

    revalidatePath('/profesores-api')
    redirect('/profesores-api')
}

export async function editarProfesorAPI(formData) {
    const id = formData.get('id')
    const profesor = {
        nombre: formData.get('nombre'),
        especialidad: formData.get('especialidad'),
        estadoCivil: formData.get('estadoCivil')
    }

    const response = await fetch('http://localhost:3002/profesores/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profesor)
    })

    revalidatePath('/profesores-api')
    redirect('/profesores-api')
}

export async function eliminarProfesorAPI(formData) {
    const id = formData.get('id')

    const response = await fetch('http://localhost:3002/profesores/' + id, {
        method: 'DELETE',
    })

    revalidatePath('/profesores-api')
}

// Profesores - Database Actions
export async function nuevoProfesorDB(formData) {
    try {
        const sql = 'INSERT INTO profesores (nombre, especialidad, estadoCivil) VALUES (?, ?, ?)';
        const values = [
            formData.get('nombre'),
            formData.get('especialidad'),
            formData.get('estadoCivil')
        ];
        
        await db.query(sql, values);

        revalidatePath('/profesores-db');
        redirect('/profesores-db');
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message };
    }
}

export async function editarProfesorDB(formData) {
    try {
        const id = formData.get('id');
        const sql = 'UPDATE profesores SET nombre = ?, especialidad = ?, estadoCivil = ? WHERE id = ?';
        const values = [
            formData.get('nombre'),
            formData.get('especialidad'),
            formData.get('estadoCivil'),
            id
        ];
        
        await db.query(sql, values);

        revalidatePath('/profesores-db');
        redirect('/profesores-db');
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message };
    }
}

export async function eliminarProfesorDB(formData) {
    try {
        const id = formData.get('id');
        const sql = 'DELETE FROM profesores WHERE id = ?';
        const values = [id];
        
        await db.query(sql, values);

        revalidatePath('/profesores-db');
        return { success: true };
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message };
    }
}