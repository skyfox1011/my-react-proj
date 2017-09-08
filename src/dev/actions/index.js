export const selectCharacter = (character) => {
    return {
        type: 'CHARACTER_SELECTED',
        payload: character
    }
}

export const filterMoves = (character, search) => {
    return {
        type: 'MOVES_FILTERED',
        payload: { id: character.id,  moves: getFilteredMoves(character.moves, search) }
    }
}

export const getFilteredMoves = (moves = [], search = '') => {
    return search !== '' ? moves.filter((move) => move.command.includes(search)) : moves;
}

export const getCorrectedList = (character, filteredMoves, searchText) => {
    return filteredMoves ? 
        filteredMoves.id === character.id ?
            filteredMoves.moves
            : getFilteredMoves(character.moves, searchText)
        : character.moves ? 
            character.moves 
            : [];
}