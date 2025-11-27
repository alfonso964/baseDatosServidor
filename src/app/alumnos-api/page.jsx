import { Suspense } from "react";
import Link from "next/link";

import Fallback from "@/components/fallback";
import AlumnosAPI from "@/components/api-alumnos";
import AlumnoNuevoAPI from "@/components/api-alumno-nuevo";

async function AlumnosAPIPage({ searchParams }) {
    let { query } = await searchParams;
    query ??= '';

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                ALUMNOS - API
            </h1>

            <AlumnoNuevoAPI />

            <Suspense fallback={<Fallback>Obteniendo datos ... </Fallback>}>
                <AlumnosAPI query={query} />
            </Suspense>
        </section>
    );
}

export default AlumnosAPIPage;