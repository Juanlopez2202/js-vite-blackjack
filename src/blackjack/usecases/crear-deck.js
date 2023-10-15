// Esta función crea un nuevo deck
import _ from "underscore";
/**
 * 
 * @param {Array<String>} tiposdeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>}
 */
export const crearDeck = (tiposdeCarta , tiposEspeciales) => {
    if (!tiposdeCarta || tiposdeCarta.length === 0 ) 
    throw new Error("Tipos de carta es obligatorio como un arreglo de string");
    if (!tiposEspeciales || tiposEspeciales.length === 0 ) 
    throw new Error("Tipos de especiales es obligatorio como un arreglo de string");

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposdeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposEspeciales ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}


//export default crearDeck; //export global