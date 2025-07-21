'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PartidosFiltro({ año: añoInit, mes: mesInit }) {
    const [año, setAño] = useState(añoInit);
    const [mes, setMes] = useState(mesInit);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navega a la misma página con los query params actualizados
        router.push(`/partidos?año=${año}&mes=${mes}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Año:
            <input
            type="number"
            value={año}
            onChange={e => setAño(e.target.value)}
            min="2000"
            max="2100"
            />
        </label>
        <label>
            Mes:
            <input
            type="number"
            value={mes}
            onChange={e => setMes(e.target.value)}
            min="1"
            max="12"
            />
        </label>
        <button type="submit">Buscar</button>
        </form>
    );
}
