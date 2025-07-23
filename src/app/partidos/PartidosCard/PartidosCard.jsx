// CardPartido2.jsx
'use client';

import styles from './PartidosCard.module.css';
import { URL_IMAGES } from '../../../utils/constants';
import { formatearSlugPartido } from '../../../utils/utils';
import { formatearHora } from '../../../utils/formatearHora';
import { formatearFechaSimple } from '../../../utils/formatearFecha';

export default function PartidosCard({ partido }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.detallesWrapper}>
                <img
                    src={`${URL_IMAGES}/escudos/${
                        partido?.condicion === 'V' ? partido.escudo_local : partido.escudo_visita
                    }`}
                    alt="Escudo"
                />

                <div className={styles.detalles}>
                    <div className={styles.detallesTop}>
                        <p>
                            {partido.hora && <>{formatearHora(partido.hora)} - </>}
                            {formatearFechaSimple(partido.dia)}
                        </p>
                        <div className={styles.equiposWrapper}>
                            <div
                                className={`${styles.equipoWrapper} ${
                                    partido.condicion !== 'V' ? styles.iacc : ''
                                }`}
                            >
                                <h2>{partido.equipo_local}</h2>
                                <div className={styles.equipoGoles}>
                                    <p>
                                        {partido.goles_local}
                                        {partido.penales_local && (
                                            <span>({partido.penales_local})</span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`${styles.equipoWrapper} ${
                                    partido.condicion === 'V' ? styles.iacc : ''
                                }`}
                            >
                                <h2>{partido.equipo_visita}</h2>
                                <div className={styles.equipoGoles}>
                                    <p>
                                        {partido.goles_visita}
                                        {partido.penales_visita && (
                                            <span>({partido.penales_visita})</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.detallesBottom}>
                        <p>{partido.estadio}</p>
                        <span>
                            {partido.nombre_torneo || partido.torneo}
                            {partido.torneo_img && (
                                <img src={`${URL_IMAGES}torneos/${partido.torneo_img}`} alt="Torneo" />
                            )}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.botones}>
                <a
                    href={`/partidos/${formatearSlugPartido(
                        partido.equipo_local,
                        partido.equipo_visita
                    )}/${partido.id_partido}`}
                >
                    ficha del partido
                </a>
            </div>
        </div>
    );
}