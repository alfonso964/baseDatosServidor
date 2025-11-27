import Link from 'next/link'
import Buscar from '@/components/buscar'
import { obtenerProfesoresAPI } from '@/lib/data'
import { eliminarProfesorAPI } from '@/lib/action'
import ProfesorEditarAPI from './api-profesor-editar'  // ← CORREGIDO (singular)

async function ProfesoresAPI({ query }) {
    const profesores = await obtenerProfesoresAPI(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2 mb-2 border-b-2 border-b-slate-600'>
                Lista de Profesores (API)
            </h1>

            <Buscar placeholder="Buscar profesores..." />

            <div className='flex flex-col'>
                {profesores.sort((a, b) => a.createdAt - b.createdAt).reverse()                            
                    .map((profesor) => (
                        <div key={profesor.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/profesores-api/${profesor.id}`}>{profesor.nombre}</Link>
                            <div className='flex gap-6'>
                                <ProfesorEditarAPI profesor={profesor} />
                                <form>
                                    <input type="hidden" name='id' value={profesor.id} />
                                    <button formAction={eliminarProfesorAPI} title='ELIMINAR' className='text-xl'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProfesoresAPI