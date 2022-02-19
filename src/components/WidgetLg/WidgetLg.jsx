import React from 'react'
import "./widgetLg.css"

const WidgetLg = () => {
  const Button = ({ type }) => {
    return (
      <button className={"widgetLgButton " + type}>
        {type}
      </button>
    )
  }

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" className="widgetLgImage" />
              <span className="widgetLgName">Bianca Ferreira</span>
            </td>
            <td className="widgetLgDate">20 Feb 2022</td>
            <td className="widgetLgAmount">$216.18</td>
            <td className="widgetLgStatus"><Button type="Approved" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" className="widgetLgImage" />
              <span className="widgetLgName">Lucas Bouwer</span>
            </td>
            <td className="widgetLgDate">20 Feb 2022</td>
            <td className="widgetLgAmount">$216.18</td>
            <td className="widgetLgStatus"><Button type="Declined" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" className="widgetLgImage" />
              <span className="widgetLgName">Edward Allen</span>
            </td>
            <td className="widgetLgDate">20 Feb 2022</td>
            <td className="widgetLgAmount">$216.18</td>
            <td className="widgetLgStatus"><Button type="Pending" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" className="widgetLgImage" />
              <span className="widgetLgName">Gloria Vazquez</span>
            </td>
            <td className="widgetLgDate">20 Feb 2022</td>
            <td className="widgetLgAmount">$216.18</td>
            <td className="widgetLgStatus"><Button type="Approved" /></td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg