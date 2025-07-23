import { getPartidosAñoMes } from '@/src/lib/fetchers/partidos';
import styles from './pagePartidos.module.css';
import PartidosFiltro from '@/src/app/partidos/PartidosFiltro/PartidosFiltro';
import PartidosCard from './PartidosCard/PartidosCard';

export default async function PartidosPage({ searchParams = {} }) {
    const now = new Date();
    const año = searchParams?.año || String(now.getFullYear());
    const mes = searchParams?.mes || String(now.getMonth() + 1);
    const partidos = await getPartidosAñoMes(Number(año), Number(mes));
    
    return (
        <div className={styles.partidos_container}>
            <PartidosFiltro año={año} mes={mes} />
            <div className={styles.partidos_wrapper}>
                {partidos.length > 0 ? <>
                    {partidos.map((p) => (
                        <PartidosCard key={p.id_partido} partido={p} />
                    ))} </> : <p>No se encontraron partidos que coincidan con los criterios seleccionados</p>
                }
            </div>
        </div>
    );
}
