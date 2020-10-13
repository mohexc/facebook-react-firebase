import React from 'react'
import SidebarRow from './SidebarRow'
import "./Sidebar.less"
import { MdLocalHospital, MdFlag, MdPeople, MdChat, MdStore, MdVideoLibrary, MdExpandMore } from "react-icons/md";
import { useAuthContext } from '../context/AuthContext';

const sidebarRows = [
    {
        title: 'COCID-19 Information Center',
        icon: <MdLocalHospital className="iconSidebar" size={24} />
    },
    {
        title: 'Pages',
        icon: <MdFlag className="iconSidebar" size={24} />
    },
    {
        title: 'Friends',
        icon: <MdPeople className="iconSidebar" size={24} />
    },
    {
        title: 'Messenger',
        icon: <MdChat className="iconSidebar" size={24} />
    },
    {
        title: 'Marketplace',
        icon: <MdStore className="iconSidebar" size={24} />
    },
    {
        title: 'Videos',
        icon: <MdVideoLibrary className="iconSidebar" size={24} />
    },
    {
        title: "",
        icon: <MdExpandMore className="iconSidebar" />
    },
]

// main
const Sidebar = () => {

    const { user } = useAuthContext()

    return (
        <div className="">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            {sidebarRows.map(sidebarRow => <SidebarRow title={sidebarRow.title} icon={sidebarRow.icon} />)}
        </div>
    )
}

export default Sidebar
