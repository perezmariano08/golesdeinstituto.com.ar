import { getPartidosAñoMes } from '@/src/lib/fetchers/partidos';
import PartidosIndex from './partidosIndex';

export default async function PartidosPage({ params }) {
  const { año, mes } = params;
  const partidos = await getPartidosAñoMes(Number(año), Number(mes));

  return (
    <div>
        <PartidosIndex />
        <h1>Partidos de {año} / {mes}</h1>
        <ul>
            {partidos.map((p) => (
            <li key={p.id_partido}>{p.equipo_local} vs {p.equipo_rival}</li>
            ))}
        </ul>
    </div>
  );
}
