import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType
export type AffairsType = Array<AffairType>

// constants
const defaultAffairs: AffairsType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairsType, filter: FilterType): AffairsType => {
    if (filter === 'all') return affairs
    else return affairs.filter((a)=> a.priority === filter)
}
export const deleteAffair = (affairs: AffairsType, _id: number): AffairsType => {
    return affairs.filter((a) => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
