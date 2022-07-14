const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

const changeStatus = list => {
    const isApproved = true;
    list.forEach(( element, index) => {
        if( (element.T1 && element.T2 ) === true || ( element.T2 && element.T3) === true || ( element.T1 && element.T3) === true){
            list[index].isApproved = isApproved;
        } else {
            list[index].isApproved = !isApproved;
        }
    });
    return list;
}

console.log(changeStatus( alumns ));
