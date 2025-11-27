import Link from "next/link";

async function Home() {

  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <section className="min-h-screen max-w-[1024px] mx-auto px-10">
      <h1 className='py-10 text-4xl text-blue-500 text-center border-b-4 border-b-blue-500'>
        NextJS: contenido dinámico
      </h1>

      <div className="h-[600px] flex flex-col gap-10 justify-center content-center">
        
        {/* PRODUCTOS */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-slate-600 mb-4">PROFESORES</h2>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <Link href="/profesores-db" className="block text-2xl text-blue-400 font-bold">
                BASE DE DATOS
              </Link>
              <p className="text-sm">MySQL local</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href="/profesores-api" className="block text-2xl text-blue-400 font-bold">
                API REST
              </Link>
              <p className="text-sm">JSON Server</p>
            </div>
          </div>
        </div>

        {/* Alumnos - NUEVO */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-slate-600 mb-4">ALUMNOS</h2>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <Link href="/alumnos-db" className="block text-2xl text-green-400 font-bold">
                BASE DE DATOS
              </Link>
              <p className="text-sm">MySQL local</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href="/alumnos-api" className="block text-2xl text-green-400 font-bold">
                API REST
              </Link>
              <p className="text-sm">JSON Server</p>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Home