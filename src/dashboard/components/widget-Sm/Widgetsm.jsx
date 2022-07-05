import React from 'react';
import "./widgetSm.css";
import Meals from "../../img/Meals.png";
import {Visibility} from '@material-ui/icons';

export default function Widgetsm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Meals</span>
      <ul className="widgetSmList">
      <li className="widgetSmListItem">
        <img src={Meals} alt={Meals} className="widgetSmImg" />
        <div className="widgetSmFood">
          <span className="widgetFoodname">Jollof Rice</span>
        </div>
        <button className="widgetSmbutton">
          <Visibility className=" widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src={Meals} alt={Meals} className="widgetSmImg" />
        <div className="widgetSmFood">
          <span className="widgetFoodname">Vegetable Stew </span>
        </div>
        <button className="widgetSmbutton">
          <Visibility className=" widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src={Meals} alt={Meals} className="widgetSmImg" />
        <div className="widgetSmFood">
          <span className="widgetFoodname">Jollof Rice</span>
        </div>
        <button className="widgetSmbutton">
          <Visibility className=" widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src={Meals} alt={Meals} className="widgetSmImg" />
        <div className="widgetSmFood">
          <span className="widgetFoodname">Jollof Rice</span>
        </div>
        <button className="widgetSmbutton">
          <Visibility className=" widgetSmIcon" />
          Display
        </button>
      </li>
      </ul>
    </div>
  )
}
