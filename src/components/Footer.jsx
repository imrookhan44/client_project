import React, { useEffect, useState } from 'react';
import './footer.css';
import { useLocation } from 'react-router-dom';
import FooterAccordion from './FooterAccordion';

function Footer() {
    const location = useLocation();
    const hide = location.pathname == '/search';
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return (
        <div className={hide ? "footer-container hide" : "footer-container"}>
            {/* First row */}

            <div className="footer-row">
                <div className="footer-col">
                    <h2>בעלי חיים</h2>
                    <div className="footer-inner">
                        <div className="footerinnercol">
                            <p>חיות משק</p>
                            <p>מכרסמים</p>
                            <p>זוחלים</p>
                        </div>
                        <div className="footerinnercol">
                            <p>כל החיות</p>
                            <p>כלבים</p>
                            <p>חתולים</p>
                            <p>דגים</p>
                        </div>
                    </div>


                </div>
                <div className="footer-col">
                    <h2>יד שנייה</h2>
                    <div className="footer-inner">
                        <div className="footerinnercol">
                            <p>תינוקות וילדים</p>
                            <p>מוצרי חשמל</p>
                        </div>
                        <div className="footerinnercol">
                            <p>כל המוצרים</p>
                            <p>טיפוח ואופנה</p>
                            <p>רהיטים</p>
                            <p>לבית ולגינה</p>
                        </div>
                    </div>
                </div>
                <div className="footer-col">
                    <h2>רכב</h2>
                    <div className="footer-inner">
                        <div className="footerinnercol">
                            <p>מיוחדים</p>
                            <p>ג’יפים</p>
                            <p>מסחרי</p>
                            <p>כלי שייט</p>
                        </div>
                        <div className="footerinnercol">
                            <p>כל הרכבים</p>
                            <p>אופנועים</p>
                            <p>קטנועים</p>
                            <p>משאיות</p>
                        </div>
                    </div>
                </div>
                <div className="footer-col">
                    <h2>נדל”ן</h2>
                    <div className="footer-inner">
                        <div className="footerinnercol">
                            <p>מכירה</p>
                            <p>השכרה</p>
                            <p>שותפים</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-row">
                <FooterAccordion text={"בעלי חיים"} content={["דגים", "חתולים", "מכרסמים"]} />
                <FooterAccordion text={"יד שנייה"} content={["רהיטים", "לבית ולגינה", " לבית ולגינה"]} />
                <FooterAccordion text={"רכב"} content={["אופנועים", "קטנועים", "מסחרי"]} />
                <FooterAccordion text={"נדל”ן"} content={["שותפים", "השכרה", "מכירה"]} />
            </div>
            {/* Second row */}
            <div className="footer-row">
                <div className="footer-social">
                    <img src={require(`../images/facebookicon.png`)} alt="" />

                </div>
                <div className="footer-social">
                    <img src={require(`../images/tiktokicon.png`)} alt="" />

                </div>
                <div className="footer-social">
                    <img src={require(`../images/instegramicon.png`)} alt="" />

                </div>
                <div className="footer-social">
                    <img src={require(`../images/youtubeicon.png`)} alt="" />

                </div>
            </div>
            {/* Third row */}
            <div className="footer-row">
                <p> בתים להשכרה, העברת בתים, הובלות, לימודים, קניות, בעלי מקצוע, אצבע, תיירות ועוד. אין לעשות שימוש בכל התכנים המופיעים בלוח מודעות.</p>
                <p>כל הזכויות שמורות לחברת לא ידוע תל מפעילות לוח מודעות- לוח מודעות: דרושים, דירות להשכרה, בתים למכירה,</p>
            </div>

            {/* Fourth row */}
            <div className="footer-row">
                <h5>צור קשר</h5>
                <h5>מפת אתר</h5>
                <h5>הצהרת נגישות</h5>
                <h5>מדיניות פרטיות</h5>
                <h5>תקנון</h5>
            </div>
        </div>
    );
}

export default Footer;