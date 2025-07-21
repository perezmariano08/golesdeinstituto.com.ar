import { URL_API } from "@/src/utils/constants";

export async function getPartidos() {
    const res = await fetch(`${URL_API}partidos`, { next: { revalidate: 3600 } });
    return res.json();
}

export async function getPartidoById(id) {
    const res = await fetch(`${URL_API}partidos/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Error al obtener el partido');
    return res.json();
}

export async function getPartidosAñoMes(año, mes) {    
    const res = await fetch(`${URL_API}partidos/por-fecha?temporada=${año}&mes=${mes}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Error al obtener los partidos por año y mes');
    return res.json();
}