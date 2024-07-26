import React from 'react';
import style from './Card.module.css';

function Card() {
  return (
    <div className={style.background}>
        <div className={style.center}>
            <p className={style.color}>
                Hello, my name is
            </p>
            <h1 className={style.color}>
                Luckie Musngi. <br/>
                Programmer and stuff.
            </h1>
            <p className={style.color}>
                Big paragraph of
                stuff a-nd mroe 
                stuff
            </p>

            <div>
                <button className={style.button}>
                    Contact
                </button>
            </div>
        </div> 
    </div>
  )
}

export default Card