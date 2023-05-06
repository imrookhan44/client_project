import React from 'react'
import "./weeklyTaskTable.css"
const WeeklyTaskTable = () => {
    const data = [{
        "id": "1",
        "name": "בצעו לפחות 3 פעמים את המשימות ביומיות",
        "option": "option1",
        "status": "הושלם",
    }]

    return (
        <div className="weeklyTask-table">
            <div className="weeklyTask-table__header">
                <p>משימות שבועויות</p>
            </div>
            <table className="weeklyTask-table__table">
                <thead>
                    <tr>
                        <th>מס’</th>
                        <th>המשימה</th>
                        <th>מצב משימה</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className={(item.status == "הושלם" ? "completed" : null)}>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WeeklyTaskTable