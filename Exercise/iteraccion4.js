const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}


const placesFunction = list => {
    for (const key in list) {
        console.log( list[key] );
    }
}

placesFunction( alien );