import {UserType} from "../HW8";

type sortSettingsType = 'up' | 'down'

export const homeWorkReducer = (state: UserType[], action: allActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b)=> {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === "up" ? newState : newState.reverse()
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
