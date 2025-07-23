export function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const diasSemana = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const diaSemana = diasSemana[fecha.getUTCDay()];
    const dia = fecha.getUTCDate();
    const mes = meses[fecha.getUTCMonth()];
    const año = fecha.getUTCFullYear();

    return `${diaSemana}, ${dia} ${mes} ${año}`;
}

export function formatearFechaSimple(fechaISO) {
    const fecha = new Date(fechaISO);
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const dia = fecha.getUTCDate();
    const mes = meses[fecha.getUTCMonth()];
    const año = fecha.getUTCFullYear();

    return `${dia} ${mes} ${año}`;
}

export function formatearDDMMAAAA(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();

    return `${dia}/${mes}/${año}`;
}

export function formatearDDMM(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;  // Sumar 1 para corregir el índice del mes
    const año = fecha.getFullYear();

    return `${dia}/${mes}`;
}

export function formatearFechaImagenesPartido(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();

    return `${año}-${mes}-${dia}`;
}