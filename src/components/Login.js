import { Button, message, } from 'antd'

import React from 'react'
import { provider, auth } from '../configs/firebase'
import { useAuthContext } from '../context/AuthContext'
import './Login.less'
// main
const Login = () => {
    const { setUser } = useAuthContext()

    const sigin = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((e) => message.error(e.message))
    }
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/90269026_2892612417451931_8278745618491375616_o.png?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=qUeI1UWOpbMAX_EJ1Mr&_nc_pt=1&_nc_ht=scontent.fbkk5-7.fna&oh=a5ecaddf6a6af5a06cb4dd2a8ff2d8c4&oe=5FA92D6E" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>

            <Button type="primary" onClick={sigin} >Sign In</Button>
        </div>
    )
}

export default Login
