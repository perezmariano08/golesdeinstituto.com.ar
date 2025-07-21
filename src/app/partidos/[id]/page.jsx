import { getPartidoById } from "@/src/lib/fetchers/partidos"; // o donde esté tu función

export default async function PartidoPage({ params }) {
    const { id } = params;
    const partido = await getPartidoById(id);

    return (
        <div>
            <h1>Partido</h1>
            <pre>{JSON.stringify(partido, null, 2)}</pre>
        </div>
    );
}
