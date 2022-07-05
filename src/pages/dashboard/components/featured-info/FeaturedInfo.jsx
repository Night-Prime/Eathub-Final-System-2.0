import React from 'react';
import './featuredInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

function FeaturedInfo() {
  return (
      <>
        <div className="featuredInfo">
            <div className="featuredItem">
                <div className="featuredTitle">
                    Revenue
                </div>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$0.00</span>
                    <span className="featuredRate">
                        5.6 <ArrowDownward className='featuredIcon negative' />     
                    </span>
                </div>
                <span className="featuredSub">Compared to 30days Earlier..</span>
            </div>
            <div className="div featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $0.00
                    </span>
                    <span className="featuredRate">
                        0 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Compared to 30days Earlier..</span>
            </div>
            <div className="div featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $0.00
                    </span>
                    <span className="featuredRate">
                        0  <ArrowDownward className='featuredIcon negative' />      
                    </span>
                </div>
                <span className="featuredSub">Compared to 30days Earlier..</span>
            </div>
        </div>
    </>
  );
}

export default FeaturedInfo
