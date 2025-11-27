import { Suspense } from "react";
import Link from "next/link";

import Fallback from "@/components/fallback";
import ProfesoresDB from "@/components/db-profesores";
import ProfesorNuevoDB from "@/components/db-profesor-nuevo";

async function ProfesoresDBPage({ searchParams }) {
    let { query } = await searchParams;
    query ??= '';

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                PROFESORES - BASE DE DATOS
            </h1>

            <ProfesorNuevoDB />

            <Suspense fallback={<Fallback>Obteniendo datos ... </Fallback>}>
                <ProfesoresDB query={query} />
            </Suspense>
        </section>
    );
}

export default ProfesoresDBPage;