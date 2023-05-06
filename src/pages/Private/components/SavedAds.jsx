import React from 'react'
import "./savedAds.css"
import { AiFillHeart } from 'react-icons/ai';
import Card from '../../Categories/components/Card';
const SavedAds = () => {
    const featuresColumn = [
        [
            {
                "icon": "",
                "text1": "בית קפה",
                "text2": "סוג"
            }
        ]
    ]
    return (
        <div className='savedAds'>
            <h1> <AiFillHeart /> מודעות שמורות שלי</h1>
            <div className="savedAds-cards">
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
    )
}

export default SavedAds