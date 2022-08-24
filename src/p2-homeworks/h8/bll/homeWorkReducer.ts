import {UserType} from "../HW8";

type sortSettingsType = 'up' | 'down'

export const homeWorkReducer = (state: UserType[], action: allActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let newState = [...state]
            if (action.payload === 'up') {
                return newState.sort((a, b) => b.age - a.age)
            }
            if (action.payload === 'down') {
                return newState.sort((a, b) => a.age - b.age)
            }
            return state
        }
        case 'check-age': {
            return state.filter((p)=> p.age > action.payload)
        }
        default: return state
    }
}

type allActionsType = descendingAndAscendingSortACType | checkAgeACType

type descendingAndAscendingSortACType = ReturnType<typeof descendingAndAscendingSortAC>

const descendingAndAscendingSortAC = (settings: sortSettingsType) => {
    return {
        type: 'sort',
        payload: settings
    } as const
}

type checkAgeACType = ReturnType<typeof checkAgeAC>

const checkAgeAC = (checkAge: number) => {
    return {
        type: 'check-age',
        payload: checkAge
    } as const
}
