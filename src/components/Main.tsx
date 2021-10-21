import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

type PropsType = {
    login: string,
    password: string,
    onAuth: () => void
}

const Main = (props: PropsType) => { // решил не использовать формы из-за простоты
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, changeDisable] = useState(true);
    const history = useHistory();

    const handleClick = () => {
        props.onAuth()
        history.push("/profile");
    }

    useEffect(() => {
        if (props.login === login && props.password === password) {
            changeDisable(false)
        } else {
            changeDisable(true)
        }
    }, [login, password, props.login, props.password])


    return (
        <div>
            <input type="text" placeholder="Логин" onChange={e => setLogin(e.target.value)}/>
            <input type="text" placeholder="Пароль" onChange={e => setPassword(e.target.value)}/>
            <button disabled={disabled} onClick={handleClick}>Войти</button>
        </div>
    )
}
export default Main
