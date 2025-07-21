import { getPartidosAñoMes } from '@/src/lib/fetchers/partidos';
import PartidosIndex from './partidosIndex';
import PartidosFiltro from './partidosFiltro';

export default async function PartidosPage({ searchParams = {} }) {
    // Obtener año y mes actuales
    const now = new Date();
    const añoActual = now.getFullYear();
    const mesActual = now.getMonth() + 1; // getMonth() va de 0 a 11

    // Usar query params o valores por defecto
    const año = searchParams?.año || String(añoActual);
    const mes = searchParams?.mes || String(mesActual);

    // Convertir a número
    const añoNum = Number(año);
    const mesNum = Number(mes);

    const partidos = await getPartidosAñoMes(añoNum, mesNum);

    return (
        <div>
            <h1>Partidos de {año} / {mes}</h1>
            <PartidosFiltro año={año} mes={mes} />
            <ul>
                {partidos.map((p) => (
                <li key={p.id_partido}>{p.equipo_local} vs {p.equipo_visita}</li>
                ))}
            </ul>
        </div>
    );
}
