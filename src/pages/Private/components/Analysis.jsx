import React from 'react'
import "./analysis.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Card from '../../Categories/components/Card';

const Analysis = () => {
    const featuresColumn = [
        [
            {
                "icon": "",
                "text1": "בית קפה",
                "text2": "סוג"
            }
        ]
    ]
    const data = [{ name: 'Page A', uv: 50, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 220, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page D', uv: 400, pv: 200, amt: 2400 }];
    return (
        <div className='analysis'>
            <h1>ניתוח מתקדם</h1>
            <div className="analysis-info">
                <div className='analysis-info-card'>
                    <img src={require(`../../../images/eye.png`)} alt="" />
                    <div>
                        <p>סה”כ קליקים</p>
                        <h4>50,586</h4>
                    </div>
                </div>
                <div className='analysis-info-card'>
                    <img src={require(`../../../images/%.png`)} alt="" />
                    <div>
                        <p> סה”כ צפיות</p>
                        <h4>50,586</h4>
                    </div>
                </div>
            </div>
            <div className="analysis-graph">
                <h2>ערך הפוסטים</h2>
                <LineChart width={1000} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>

            </div>
            <div className="analysis-cards">
                <h2>פוסטים שלי</h2>
                <div className='analysis-cards-card'>
                    <Card
                        image="Card-business"
                        heading="🔥 מסעדה רווחית 1.5 מיליון בשנה"
                        title1="לפני 6 ימים"
                        title2="פתח תקווה"
                        featureColumns={featuresColumn}
                        buttonText=" פרטים נוספים  "
                        text1="מסעדה כשרה רווחית כ-1.5 מיליון בשנה. פעילה 5 ימים בשבוע ומוצש. מושקעת כ-4.5 מיליון שח. מחזור שנתי כ-8-10 מיליון. רישיון עסק. בעלים פעיל בניהול מלמעלה בלבד. צוות "
                        text2={[
                            "מחיר",
                            " ₪680,000"
                        ]}
                        productId={4}
                    />
                    <Card
                        image="Card-business"
                        heading="🔥 מסעדה רווחית 1.5 מיליון בשנה"
                        title1="לפני 6 ימים"
                        title2="פתח תקווה"
                        featureColumns={featuresColumn}
                        buttonText=" פרטים נוספים  "
                        text1="מסעדה כשרה רווחית כ-1.5 מיליון בשנה. פעילה 5 ימים בשבוע ומוצש. מושקעת כ-4.5 מיליון שח. מחזור שנתי כ-8-10 מיליון. רישיון עסק. בעלים פעיל בניהול מלמעלה בלבד. צוות "
                        text2={[
                            "מחיר",
                            " ₪680,000"
                        ]}
                        productId={4}
                    />

                </div>
            </div>
        </div>
    )
}

export default Analysis