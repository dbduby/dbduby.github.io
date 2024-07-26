import React from 'react';
import style from './TopNav.module.css';

function TopNav() {
  return (
    <div className={style.right}>
        {/* about, project, contact*/}

        <nav className={style.right}>
            <p className={style.nav_option}>About</p>
            <p className={style.nav_option}>Project</p>
            <p className={style.nav_option}>Contact</p>
            <button className={style.resume_button}>Resume</button>
        </nav>
    </div>
  )
}

export default TopNav