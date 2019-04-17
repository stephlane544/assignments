import React from "react";
import "./Styles/SideDrawer.css";


const SideDrawer = (props) => {

    let drawerClasses = "sideDrawer";
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return  (
        <div className={drawerClasses}>
            <ul><a href='#projects' className='links sideLinks navProjects'  to='/projects'  onClick={props.drawerClickHandler}>Projects</a></ul>
            <ul><a href='#contact' className='links sideLinks navContact' to='/contact'  onClick={props.drawerClickHandler}>Contact</a></ul>
        </div>
    )
}

export default SideDrawer;