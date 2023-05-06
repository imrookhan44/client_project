import React from 'react'
import "./dailyTaskTable.css"
const DailyTaskTable = () => {
    const data = [{
        "id": "1",
        "name": "הישארו מחוברים לאתר כ- 5 דקות רצופות",
        "option": "option1",
        "status": "הושלם",
    },
    {
        "id": "2",
        "name": "הקפיצו את מודעתכם",
        "option": "option1",
        "status": "ממתין",
    },
    {
        "id": "3",
        "name": " התחבר לאתר לפחות פעם אחת ביום",
        "option": "option1",
        "status": "הושלם",
    },]

    return (
        <div className="dailyTask-table">
            <div className="dailyTask-table__header">
                <p>משימות יומיות</p>
            </div>
            <table className="dailyTask-table__table">
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

export default DailyTaskTable