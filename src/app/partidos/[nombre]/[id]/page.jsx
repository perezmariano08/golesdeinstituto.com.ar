import { getPartidoById } from "@/src/lib/fetchers/partidos"; // o donde esté tu función
import styles from './pagePartido.module.css'
import Link from "next/link";
import { URL_IMAGES } from "@/src/utils/constants";
import { BiFootball } from "react-icons/bi";

export async function generateMetadata({ params }) {
    const { id } = params;
    const partido = await getPartidoById(id);

    return {
        title: partido.general.nombre,
        description: `Resumen y datos del partido entre ${partido.equipo_local} y ${partido.equipo_visita}`,
    };
}

export default async function PartidoPage({ params }) {
    const { id } = params;
    const partido = await getPartidoById(id);
    const golesLocal = partido.incidencias.local?.filter((g) => g.tipo === "G") || [];
    const golesVisita = partido.incidencias.visita?.filter((g) => g.tipo === "G") || [];

    console.log(golesLocal);
    
    return (
        <div className={styles.partido_container}>
            <div className={styles.partido_wrapper}>
                <div className={styles.wrapper_left}>
                    <div className={styles.detalles_wrapper}>
                        <div className={styles.info}>
                            <p>{partido.general.torneo.nombre}</p>
                            <p>Nacional 1973</p>
                        </div>
                        <div className={styles.metadata}>
                            <div className={styles.item}>
                                <p>A confirmar</p>
                            </div>
                        </div>
                        <div className={styles.detalles_equipos}>
                            <div className={styles.detalles_equipo}>
                                <Link href={''}>
                                    <h3>{partido.general.equipoLocal.nombre}</h3>
                                    <img src={`${URL_IMAGES}escudos/${partido.general.equipoLocal.escudo}`} />
                                </Link>
                            </div>
                            <div className={styles.detalles_resultado}>
                                {
                                    partido.general.estado === "F" ? <>
                                    <strong>{`${partido.general.goles.local} - ${partido.general.goles.visita}`}</strong>
                                        {
                                            partido.general.goles.penales_local 
                                            ? <strong className='penales'>{`Pen: ${partido.general.goles.penales_local }-${partido.general.goles.penales_visita }`}</strong>
                                            : <>
                                                {partido.general.estado === "F" && <p>Finalizado</p>}
                                            </>
                                        }
                                    </>
                                    : <>
                                        {/* <strong>{hora ? `${formatearHora(hora)}` : '-'}</strong>
                                        <p>{dia ? formatearDDMM(dia) : 'A confirmar'}</p> */}
                                        {partido.general.estado === "S" && <p>Suspendido</p>}
                                    </>
                                }
                            </div>
                            <div className={`${styles.detalles_equipo} ${styles.visitante}`}>
                                <Link href={''}>
                                    <h3>{partido.general.equipoVisita.nombre}</h3>
                                    <img src={`${URL_IMAGES}escudos/${partido.general.equipoVisita.escudo}`} />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.detalles_goles}>
                            <div className={styles.detalles_goles_equipo}>
                                {golesLocal
                                    .map((g) => {
                                        const nombreJugador = `${g.jugador.nombre?.[0] ? g.jugador.nombre[0] + '.' : ''} ${g.jugador.apellido || ''}`;
                                        const esAutogol = g.en_contra === "S";
                                        const esPenal = g.penal === "S" ? " -p-" : "";
                                        
                                        return (
                                            <p key={g.idIncidencia}>
                                                {nombreJugador}{esPenal}{esAutogol} {g.minuto}'
                                            </p>
                                        )})}
                            </div>
                            <div className={styles.detalles_goles_icono}>
                                <BiFootball />
                            </div>
                            <div className={`${styles.detalles_goles_equipo} ${styles.visitante}`}>
                                {golesVisita
                                    .map((g) => {
                                        const nombreJugador = `${g.jugador.nombre?.[0] ? g.jugador.nombre[0] + '.' : ''} ${g.jugador.apellido || ''}`;
                                        const esAutogol = g.en_contra === "S";
                                        const esPenal = g.penal === "S" ? " -p-" : "";
                                        
                                        return (
                                            <p key={g.idIncidencia}>
                                                {g.minuto}' {nombreJugador}{esPenal}{esAutogol} 
                                            </p>
                                        )})}
                            </div>
                        </div>
                    </div> 
                </div>  
            </div>    
        </div>
    );
}
