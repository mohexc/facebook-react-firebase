import { Avatar, Button } from 'antd';
import React from 'react'
import { MdSearch, MdHome, MdFlag, MdSubscriptions, MdStoreMallDirectory, MdAccountCircle, MdAdd, MdForum, MdNotificationsActive, MdExpandMore } from "react-icons/md";
import { useAuthContext } from '../context/AuthContext';
import "./Header.less"

const size = "large"

// main
const Header = () => {
    const { user } = useAuthContext()
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/90269026_2892612417451931_8278745618491375616_o.png?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=qUeI1UWOpbMAX_EJ1Mr&_nc_pt=1&_nc_ht=scontent.fbkk5-7.fna&oh=a5ecaddf6a6af5a06cb4dd2a8ff2d8c4&oe=5FA92D6E" alt="" />
                <div className="header-input">
                    <MdSearch size={30} />
                    <input type="text" placeholder="Seach Facebook" />
                </div>
            </div>
            <div className="header-center">
                <div className="header-option-active  ">
                    <MdHome className="iconStyle " size={30} />
                </div>
                <div className="header-option">
                    <MdFlag className="iconStyle" size={30} />
                </div>
                <div className="header-option">
                    <MdSubscriptions className="iconStyle" size={30} />
                </div>
                <div className="header-option">
                    <MdStoreMallDirectory className="iconStyle" size={30} />
                </div>
                <div className="header-option">
                    <MdAccountCircle className="iconStyle" size={30} />
                </div>

            </div>

            <div className="header-right ">
                <div className="header-info">
                    <Avatar src={user.photoURL} size="large" />
                    <h4>{user.displayName}</h4>
                </div>

                <Button className="flex-center-center ml050" shape="circle" size={size} ><MdAdd /></Button>
                <Button className="flex-center-center ml050" shape="circle" size={size} ><MdForum /></Button>
                <Button className="flex-center-center ml050" shape="circle" size={size} > <MdNotificationsActive /></Button>
                <Button className="flex-center-center ml050" shape="circle" size={size} ><MdExpandMore /></Button>
            </div>

        </div>
    )
}

export default Header
