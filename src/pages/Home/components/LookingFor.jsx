import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React from 'react'
import CardsAd from './CardsAd'
import "./lookingfor.css"
import data from "./lookingfor.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const LookingFor = () => {
    const featuresColumn = [
        [
            {
                "icon": "CardIconVehicle1",
                "text1": "3",
                "text2": "יד"
            },
            {
                "icon": "CardIconVehicle1",
                "text1": "150,000",
                "text2": "עד קילומטר"
            },
            {
                "icon": "CardIconVehicle2",
                "text1": "1800",
                "text2": "מנוע"
            },
            {
                "icon": "CardIconVehicle3",
                "text1": "2017",
                "text2": "משנה"
            }
        ]
    ]
    return (
        <div className='lookingfor'>
            <h1>  ? מה מחפשים אצלנו  </h1>
            <div className='lookingfor-div'>

                {data.map((items, idx) =>
                    <CardsAd
                        image="Card-car"
                        heading="אאודי Q7  🚖"
                        title1="לפני 6 ימים"
                        title2="פתח תקווה"
                        featureColumns={featuresColumn}
                        buttonText=" פרטים נוספים  "
                        text1=""
                        text2={[
                            "מחיר",
                            " ₪11,680,000 - ₪11,780,000"
                        ]}
                        productId={2}
                    />
                )}


            </div>
            <div className='lookingfor-div-mobile'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                >
                    {data.map((items, idx) =>
                        <SwiperSlide>
                            <CardsAd
                                image="Card-car"
                                heading="אאודי Q7  🚖"
                                title1="לפני 6 ימים"
                                title2="פתח תקווה"
                                featureColumns={featuresColumn}
                                buttonText=" פרטים נוספים  "
                                text1=""
                                text2={[
                                    "מחיר",
                                    " ₪11,680,000 - ₪11,780,000"
                                ]}
                                productId={2}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>



            </div>
        </div>
    )
}

export default LookingFor