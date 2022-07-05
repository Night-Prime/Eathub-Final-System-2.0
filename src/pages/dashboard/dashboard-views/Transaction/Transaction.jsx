import React from 'react';
import Widgetlg from '../../components/widgetLg/Widgetlg';
import Widgetsm from '../../components/widgetSm/Widgetsm';
import './transaction.css';


 function Transaction() {
  return (
    <>
    <div className="transaction">
    <h1 className="transactionHeading">Transactions</h1>
    <div className="transactionWidgets">
          <Widgetsm />
          <Widgetlg />
        </div>
    </div>
    
    </>
  )
}

export default Transaction