
// ==========================================
// OBTENER LA LIGA SELECCIONADA
// ==========================================

const parametros = new URLSearchParams(window.location.search);

const liga = parametros.get("liga");


// ==========================================
// ELEMENTOS DE LA PÁGINA
// ==========================================

const tituloLiga = document.getElementById("titulo-liga");

const descripcionLiga = document.getElementById("descripcion-liga");

const informacionLiga = document.getElementById("informacion-liga");

const equiposLiga = document.getElementById("equipos-liga");


// ==========================================
// INFORMACIÓN DE LAS LIGAS
// ==========================================

const ligas = {

    premier: {

        nombre: "PREMIER LEAGUE",

        pais: "Inglaterra",

        temporada: "2025-2026",

        equipos: 20,

        partidos: 380,

        campeon: "Por definir",

        logo: "LOGOS/LOGO PREMIER.jpg",

        descripcion:
            "Principal competición de fútbol profesional de Inglaterra.",

        listaEquipos: [
            "Arsenal",
            "Aston Villa",
            "Bournemouth",
            "Brentford",
            "Brighton",
            "Burnley",
            "Chelsea",
            "Crystal Palace",
            "Everton",
            "Fulham",
            "Leeds United",
            "Liverpool",
            "Manchester City",
            "Manchester United",
            "Newcastle United",
            "Nottingham Forest",
            "Sunderland",
            "Tottenham Hotspur",
            "West Ham United",
            "Wolverhampton"
        ]

    },


    laliga: {

        nombre: "LALIGA",

        pais: "España",

        temporada: "2025-2026",

        equipos: 20,

        partidos: 380,

        campeon: "Por definir",

        logo: "LOGOS/LOGO LIGA.png",

        descripcion:
            "Principal competición de fútbol profesional de España.",

        listaEquipos: [
            "Alavés",
            "Athletic Club",
            "Atlético de Madrid",
            "Barcelona",
            "Celta de Vigo",
            "Elche",
            "Espanyol",
            "Getafe",
            "Girona",
            "Levante",
            "Mallorca",
            "Osasuna",
            "Rayo Vallecano",
            "Real Betis",
            "Real Madrid",
            "Real Oviedo",
            "Real Sociedad",
            "Sevilla",
            "Valencia",
            "Villarreal"
        ]

    },


    seriea: {

        nombre: "SERIE A",

        pais: "Italia",

        temporada: "2025-2026",

        equipos: 20,

        partidos: 380,

        campeon: "Por definir",

        logo: "LOGOS/LOGO SERIE A.jpg",

        descripcion:
            "Principal competición de fútbol profesional de Italia.",

        listaEquipos: [
            "Atalanta",
            "Bologna",
            "Cagliari",
            "Como",
            "Cremonese",
            "Fiorentina",
            "Genoa",
            "Hellas Verona",
            "Inter de Milán",
            "Juventus",
            "Lazio",
            "Lecce",
            "Milan",
            "Napoli",
            "Parma",
            "Pisa",
            "Roma",
            "Sassuolo",
            "Torino",
            "Udinese"
        ]

    },


    bundesliga: {

        nombre: "BUNDESLIGA",

        pais: "Alemania",

        temporada: "2025-2026",

        equipos: 18,

        partidos: 306,

        campeon: "Por definir",

        logo: "LOGOS/LOGO BUNDESLIGA.jpg",

        descripcion:
            "Principal competición del fútbol profesional alemán.",

        listaEquipos: [
            "Bayern Múnich",
            "Bayer Leverkusen",
            "Borussia Dortmund",
            "Borussia Mönchengladbach",
            "Eintracht Frankfurt",
            "Freiburg",
            "Hamburgo",
            "Heidenheim",
            "Hoffenheim",
            "Mainz 05",
            "RB Leipzig",
            "St. Pauli",
            "Union Berlin",
            "Werder Bremen",
            "Wolfsburg",
            "Augsburg",
            "Colonia",
            "Stuttgart"
        ]

    },


    ligue1: {

        nombre: "LIGUE 1",

        pais: "Francia",

        temporada: "2025-2026",

        equipos: 18,

        partidos: 306,

        campeon: "Por definir",

        logo: "LOGOS/LOGO LIGUE ONE.jpeg",

        descripcion:
            "Máxima categoría del fútbol profesional francés.",

        listaEquipos: [
            "Angers",
            "Auxerre",
            "Brest",
            "Le Havre",
            "Lens",
            "Lille",
            "Lorient",
            "Lyon",
            "Marseille",
            "Metz",
            "Monaco",
            "Nantes",
            "Niza",
            "Paris Saint-Germain",
            "Rennes",
            "Strasbourg",
            "Toulouse",
            "Saint-Étienne"
        ]

    }

};


// ==========================================
// MOSTRAR LA LIGA SELECCIONADA
// ==========================================

if (liga && ligas[liga]) {

    // --------------------------------------
    // INFORMACIÓN GENERAL
    // --------------------------------------

    tituloLiga.textContent =
        ligas[liga].nombre;


    descripcionLiga.textContent =
        ligas[liga].descripcion;


    informacionLiga.innerHTML = `

        <div class="tarjeta-liga">

            <img
                src="${ligas[liga].logo}"
                alt="Logo ${ligas[liga].nombre}"
            >

            <h3>
                ${ligas[liga].nombre}
            </h3>

            <p>
                País: ${ligas[liga].pais}
            </p>

            <p>
                Temporada: ${ligas[liga].temporada}
            </p>

            <p>
                Número de equipos: ${ligas[liga].equipos}
            </p>

            <p>
                Número de partidos: ${ligas[liga].partidos}
            </p>

            <p>
                Campeón: ${ligas[liga].campeon}
            </p>

        </div>

    `;


    // --------------------------------------
    // ETAPA 2: MOSTRAR EQUIPOS
    // --------------------------------------

    equiposLiga.innerHTML = "";

    ligas[liga].listaEquipos.forEach(function(equipo, indice) {

        equiposLiga.innerHTML += `

            <div class="tarjeta-equipo">

                <div class="numero-equipo">
                    ${indice + 1}
                </div>

                <h3>
                    ${equipo}
                </h3>

                <p>
                    ${ligas[liga].pais}
                </p>

            </div>

        `;

    });

}

// ==========================================
// ETAPA 3 - JUGADORES
// ==========================================

const selectorLigaJugadores =
    document.getElementById("liga-jugadores");

const contenedorJugadores =
    document.getElementById("contenedor-jugadores");

// ==========================================
// INFORMACIÓN DE JUGADORES
// ==========================================

const jugadores = [

    {
        nombre: "Mohamed Salah",
        equipo: "Liverpool",
        liga: "premier",
        pais: "Egipto",
        posicion: "Delantero",
        goles: 0,
        asistencias: 0,
        titulos: 0
    },

    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        liga: "premier",
        pais: "Noruega",
        posicion: "Delantero",
        goles: 0,
        asistencias: 0,
        titulos: 0
    },

    {
        nombre: "Lamine Yamal",
        equipo: "Barcelona",
        liga: "laliga",
        pais: "España",
        posicion: "Extremo",
        goles: 0,
        asistencias: 0,
        titulos: 0
    },

    {
        nombre: "Kylian Mbappé",
        equipo: "Real Madrid",
        liga: "laliga",
        pais: "Francia",
        posicion: "Delantero",
        goles: 0,
        asistencias: 0,
        titulos: 0
    },

    {
        nombre: "Lautaro Martínez",
        equipo: "Inter de Milán",
        liga: "seriea",
        pais: "Argentina",
        posicion: "Delantero",
        goles: 0,
        asistencias: 0,
        titulos: 0
    },

    {
        nombre: "Harry Kane",
        equipo: "Bayern Múnich",
        liga: "bundesliga",
        pais: "Inglaterra",
        posicion: "Delantero",
        goles: 0,
        asistencias: 0,
        titulos: 0
    },

    {
        nombre: "Ousmane Dembélé",
        equipo: "Paris Saint-Germain",
        liga: "ligue1",
        pais: "Francia",
        posicion: "Delantero",
        goles: 0,
        asistencias: 0,
        titulos: 0
    }

];

// ==========================================
// MOSTRAR JUGADORES
// ==========================================

function mostrarJugadores(ligaSeleccionada) {

    contenedorJugadores.innerHTML = "";

    const jugadoresFiltrados =
        ligaSeleccionada === "todas"
            ? jugadores
            : jugadores.filter(function(jugador) {
                return jugador.liga === ligaSeleccionada;
            });

    jugadoresFiltrados.forEach(function(jugador) {

        contenedorJugadores.innerHTML += `

            <div class="tarjeta-jugador">

                <h3>
                    ${jugador.nombre}
                </h3>

                <p>
                    Equipo: ${jugador.equipo}
                </p>

                <p>
                    País: ${jugador.pais}
                </p>

                <p>
                    Posición: ${jugador.posicion}
                </p>

                <p class="estadistica-jugador">
                    Goles: ${jugador.goles}
                </p>

                <p class="estadistica-jugador">
                    Asistencias: ${jugador.asistencias}
                </p>

                <p class="estadistica-jugador">
                    Títulos: ${jugador.titulos}
                </p>

            </div>

        `;
    });
}

// ==========================================
// CAMBIO DE LIGA
// ==========================================

if (selectorLigaJugadores) {

    selectorLigaJugadores.addEventListener(
        "change",
        function() {

            mostrarJugadores(
                selectorLigaJugadores.value
            );

        }
    );

    mostrarJugadores("todas");
}
// ==========================================
// ETAPA 4 - ESTADISTICAS
// ==========================================

const ligaEstadisticas =
    document.getElementById("liga-estadisticas");

const ordenEstadisticas =
    document.getElementById("orden-estadisticas");

const tablaJugadores =
    document.getElementById("tabla-jugadores");

// ==========================================
// MOSTRAR ESTADISTICAS
// ==========================================

function mostrarEstadisticas() {

    if (!tablaJugadores) {
        return;
    }

    const ligaSeleccionada =
        ligaEstadisticas.value;

    const tipoOrden =
        ordenEstadisticas.value;

    let jugadoresFiltrados =
        ligaSeleccionada === "todas"
            ? jugadores
            : jugadores.filter(function(jugador) {
                return jugador.liga === ligaSeleccionada;
            });

    // ======================================
    // ORDENAR
    // ======================================

    jugadoresFiltrados.sort(function(a, b) {

        return b[tipoOrden] - a[tipoOrden];

    });

    // ======================================
    // LIMPIAR TABLA
    // ======================================

    tablaJugadores.innerHTML = "";

    // ======================================
    // CREAR FILAS
    // ======================================

    jugadoresFiltrados.forEach(function(jugador, indice) {

        let nombreLiga = "";

        switch (jugador.liga) {

            case "premier":
                nombreLiga = "Premier League";
                break;

            case "laliga":
                nombreLiga = "LaLiga";
                break;

            case "seriea":
                nombreLiga = "Serie A";
                break;

            case "bundesliga":
                nombreLiga = "Bundesliga";
                break;

            case "ligue1":
                nombreLiga = "Ligue 1";
                break;
        }

        tablaJugadores.innerHTML += `

            <tr>

                <td>
                    ${indice + 1}
                </td>

                <td>
                    ${jugador.nombre}
                </td>

                <td>
                    ${jugador.equipo}
                </td>

                <td>
                    ${nombreLiga}
                </td>

                <td>
                    ${jugador.goles}
                </td>

                <td>
                    ${jugador.asistencias}
                </td>

                <td>
                    ${jugador.titulos}
                </td>

            </tr>

        `;
    });
}

// ==========================================
// EVENTOS DE LOS FILTROS
// ==========================================

if (ligaEstadisticas && ordenEstadisticas) {

    ligaEstadisticas.addEventListener(
        "change",
        mostrarEstadisticas
    );

    ordenEstadisticas.addEventListener(
        "change",
        mostrarEstadisticas
    );

    mostrarEstadisticas();
}
// ==========================================
// ETAPA 5 - COMPETICIONES EUROPEAS
// ==========================================

const contenedorCompeticiones =
document.getElementById("contenedor-competiciones");

// ==========================================
// INFORMACIÓN DE COMPETICIONES
// ==========================================

const competiciones = [

{
    nombre: "UEFA Champions League",
    temporada: "2025-2026",
    equipos: 36,
    logo: "LOGOS/LOGO UCL.png",
    descripcion:
        "Principal competición europea de clubes organizada por la UEFA.",
    formato:
        "Fase liga y eliminatorias."
},

{
    nombre: "UEFA Europa League",
    temporada: "2025-2026",
    equipos: 36,
    logo: "LOGOS/LOGO UEL.jpg",
    descripcion:
        "Competición europea de clubes que reúne equipos de diferentes ligas nacionales.",
    formato:
        "Fase liga y eliminatorias."
},

{
    nombre: "UEFA Conference League",
    temporada: "2025-2026",
    equipos: 36,
    logo: "LOGOS/LOGO CL.png",
    descripcion:
        "Competición europea de clubes que ofrece participación internacional a equipos de distintas ligas.",
    formato:
        "Fase liga y eliminatorias."
}

];

// ==========================================
// MOSTRAR COMPETICIONES
// ==========================================

function mostrarCompeticiones() {

if (!contenedorCompeticiones) {
    return;
}

contenedorCompeticiones.innerHTML = "";

competiciones.forEach(function(competicion) {

    contenedorCompeticiones.innerHTML += `

        <div class="tarjeta-competicion">

            <h3>
                ${competicion.nombre}
            </h3>

            <p>
                Temporada: ${competicion.temporada}
            </p>

            <p>
                Número de equipos: ${competicion.equipos}
            </p>

            <p>
                ${competicion.descripcion}
            </p>

            <p class="formato-competicion">
                Formato: ${competicion.formato}
            </p>

        </div>

    `;
});

}

// ==========================================
// INICIAR COMPETICIONES
// ==========================================

if (contenedorCompeticiones) {
mostrarCompeticiones();
}
