import React from "react";
import "./Styles/SideDrawer.css";


const SideDrawer = (props) => {

    let drawerClasses = "sideDrawer";
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return  (
        <div className={drawerClasses}>
            <ul><a href='#projects' className='links navProjects'  to='/projects'>Projects</a></ul>
            <ul><a href='#contact' className='links navContact' to='/contact'>Contact</a></ul>
        </div>
    )
}

export default SideDrawer;