import React from 'react';
import "./report.css";


export default function Report() {
    return(
        <>
        <div className="report">
            <div className="reportTitleContainer">
                <h1 className="reportHead">
                     Report Error
                </h1>
                <div className="reportTitleHead">
                     Mail any inconvenience to us at <span className='txt'>Eathub HQ</span> ,How can we make your User-Experience better? :
                </div>
            </div>
            <div className="reportBody">
                <form action="/" method="post" className='reportBodyForm'>
                    <label htmlFor="text" className="reportTextArea">
                    <textarea id="report-mails" cols='120' rows="25" autofocus placeholder='Log in your complaints here...'>
                    </textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        </>
    )
}