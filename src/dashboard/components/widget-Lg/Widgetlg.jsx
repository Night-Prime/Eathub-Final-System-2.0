import React from 'react';
import "./widgetLg.css";
import icon from '../../img/icon-1.png';

export default function Widgetlg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton "  + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">
        Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Customer</th>
          <th className="widgetLgTh"> Date</th>
          <th className="widgetLgTh"> Amount</th>
          <th className="widgetLgTh"> Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {/* <img src={icon} alt={icon} className="widgetLgImg" /> */}
            <span className="widgetLgName">Abati Daniel</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$500</td>
          <td className="widgetLgStatus">
             <Button type="Confirmed" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {/* <img src={icon} alt={icon} className="widgetLgImg" /> */}
            <span className="widgetLgName">Abati Daniel</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$100</td>
          <td className="widgetLgStatus">
             <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {/* <img src={icon} alt={icon} className="widgetLgImg" /> */}
            <span className="widgetLgName">Abati Daniel</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$206</td>
          <td className="widgetLgStatus">
             <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {/* <img src={icon} alt={icon} className="widgetLgImg" /> */}
            <span className="widgetLgName">Abati Daniel</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$206</td>
          <td className="widgetLgStatus">
             <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {/* <img src={icon} alt={icon} className="widgetLgImg" /> */}
            <span className="widgetLgName">Abati Daniel</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$206</td>
          <td className="widgetLgStatus">
             <Button type="Confirmed" />
          </td>
        </tr>
      </table>
    </div>
  )
}
