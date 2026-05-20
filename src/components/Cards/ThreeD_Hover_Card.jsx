import React from 'react'
import './ThreeD_Hover_Card.css'

export default function ThreeD_Hover_Card({ title, liItem1, liItem2, liItem3, subCode, iconSource }) {
  return (
    <div class="parent">
      <div class="card">
        <div class="logo">
          <span className={`circle circle5 ${subCode}`}>
            <img src={iconSource} style={{ height: '80px', padding: '4px' }} alt="" loading='lazy' />
          </span>

        </div>
        <div class="glass"></div>
        <div class="content">
          <div className="three-card-icon-header">
            <div className={`three-card-icon ${subCode}`}></div>
            <div className="title1">{title}</div>
          </div>

          <ul className='sub-skill-list'>
            <li>{liItem1}</li>
            <li>{liItem2}</li>
            <li>{liItem3}</li>
          </ul>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  )
}
