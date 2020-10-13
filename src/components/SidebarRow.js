import { Avatar } from 'antd'
import React from 'react'
import './SidebarRow.less'

// main
const SidebarRow = ({ title, icon, src }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {icon && icon}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
