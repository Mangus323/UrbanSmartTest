import React from 'react';

type PropsType = {
    login: string
}

const Profile = (props: PropsType) => (
    <h1>
        {props.login}
    </h1>
)
export default Profile
