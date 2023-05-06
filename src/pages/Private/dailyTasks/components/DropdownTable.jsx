import React, { useState } from 'react';
import "./dropdownTable.css"
import { RiArrowDropDownFill } from 'react-icons/ri';
import { RiArrowDropUpFill } from 'react-icons/ri';

function DropdownTable() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAccordionClick = () => {
        setIsExpanded(!isExpanded);
    };
    const data = [{
        "id": "1",
        "name": "שתפו את הקישור שלכם ל 5 חברים",
        "option": "option1",
        "status": "הושלם",
    },
    {
        "id": "2",
        "name": "עשו לייק בעמוד שלנו בפייסבוק",
        "option": "option1",
        "status": "ממתין",
    },
    {
        "id": "3",
        "name": "הצטרפו עדכונים החמים שלנו במייל",
        "option": "option1",
        "status": "הושלם",
    },
    {
        "id": "4",
        "name": "פרסמו מודעה של מכירה או חיפוש",
        "option": "option1",
        "status": "ממתין",
    },]
    return (
        <div className="table-accordion">
            <div className="table-accordion-header" onClick={handleAccordionClick}>
                <p>משימות חד פעמיות</p>
                {
                    isExpanded ? <RiArrowDropDownFill /> : <RiArrowDropUpFill />
                }
            </div>
            {isExpanded && (
                <div className="table-accordion-content">
                    <table>
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
            )}
        </div>
    );
}

export default DropdownTable;
