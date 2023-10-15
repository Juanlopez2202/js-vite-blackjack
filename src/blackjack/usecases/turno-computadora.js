import { crearCartaHtmL, pedirCarta , valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<string>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = []) => {
     if(!puntosMinimos)throw new Error("los puntos minimos son necesarios");
     if(!puntosHTML)throw new Error("argumento puntos HTML es necesario");

     let puntosComputadora= 0;
    do {
        const carta = pedirCarta(deck);
     
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtmL(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 200);
}

