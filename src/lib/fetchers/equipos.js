import { URL_API } from "@/src/utils/constants";

export async function getEquipos() {
    const res = await fetch(`${URL_API}equipos`, { next: { revalidate: 3600 } });
    return res.json();
}