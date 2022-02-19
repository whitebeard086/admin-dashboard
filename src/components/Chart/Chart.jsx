import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.css"

const Chart = ({ title, data, dataKey, grid}) => {
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#436372" />
                <Line type="monotone" dataKey={dataKey} stroke="#436372" />
                <Tooltip />
                {grid && <CartesianGrid stroke="rgba(36, 63, 77, 0.1)" strokeDasharray="8 8" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart