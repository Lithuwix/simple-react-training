import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} className={s.btn}>add</button>
            <span style={{color: 'red'}}>{totalUsers}</span>
            <div className={s.errorText}><span>{error}</span></div>
        </div>
    )
}

export default Greeting
