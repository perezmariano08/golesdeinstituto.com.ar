import { getEquipos } from '@/src/lib/fetchers/equipos';
import React from 'react';

const EquiposPage = async () => {
    const equipos = await getEquipos();

    return (
        <div>
            <h1>Equipos</h1>
            <ul>
                {equipos.map((equipo) => (
                    <li key={equipo.id_equipo}>{equipo.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default EquiposPage;
