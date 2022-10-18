export type InitialStateType = {
    _id: number
    name: string
    age: number
}

export type ActionTypes = {
    type: 'sort' | 'check'
    payload: 'down' | 'up' | 18
}


export const homeWorkReducer = (state: InitialStateType[], action: ActionTypes): InitialStateType[] => {

    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state];
            stateCopy.sort((a, b) => action.payload === 'down'
                ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
            return stateCopy;
        }
        case 'check': {
            let stateCopy = [...state]
            return stateCopy.filter(el => el.age > action.payload);
        }
        default:
            return state;
    }
}