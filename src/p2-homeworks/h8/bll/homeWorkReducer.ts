export type  InitialStateType = {
    _id: number
    name: string
    age: number
}

export type ActionTypes = { type: 'sort', payload: 'up' | 'down' } |{type:'check', payload: number}


export const homeWorkReducer = (state: InitialStateType[], action: ActionTypes): InitialStateType[] => {

    switch (action.type) {
        case 'sort': {
            // let stateCopy = [...state];
            // stateCopy.sort((a, b) => action.payload === 'down'
            //     ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
            // return stateCopy;

            let stateCopy = [...state];
            stateCopy.sort((a,b) => {
                if(a.name > b.name) return 1;
                else if(a.name < b.name) return -1;
                else return 0;
            })
            return action.payload === 'up' ? stateCopy : stateCopy.reverse();
        }
        case 'check': {
            return [...state].filter(el => el.age >= action.payload);
        }
        default:
            return state;
    }
}