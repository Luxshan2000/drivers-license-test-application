import React from "react";
import CarousalCard from './CarousalCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import CarouselItem from "react-bootstrap/esm/CarouselItem";

export default function Carousal() {

    const cardList =
        [
            {
                id: 1,
                title: "Study materials",
                icon: "bi bi-book-fill",
                description: `Software offers study material organized by topics, allowing
                users to focus on specific areas they need to improve. It provides detailed explanations,
                illustrations, and references to relevant sections of the driver's handbook or manual.`
            },
            {
                id: 2,
                title: "Practice tests",
                icon: "bi bi-bookmark-fill",
                description: `Provides a collection of practice tests that mimic the format and
                structure of the actual driver's license exam. These tests cover various topics such as traffic
                signs, rules of the road, and driving laws.`
            },
            {
                id: 3,
                title: "Exam simulation",
                icon: "bi bi-brush-fill",
                description: `Users can take simulated exams that closely resemble the actual driver's
                license test. These simulations create a realistic test environment, complete with time limits and
                scoring, to help users familiarize themselves with the exam format and assess their readiness.`
            },

            {
                id: 4,
                title: "Progress tracking",
                icon: "bi bi-bar-chart-fill",
                description: `This software tracks users' performance on practice tests and simulations,
                providing detailed feedback and scores. It highlights areas of strength and weakness, enabling
                users to focus their study efforts on the topics that require more attention.`
            },
            {
                id: 5,
                title: "Interactive lessons",
                icon: "bi bi-cursor-fill",
                description: `Includes interactive lessons that offer engaging multimedia
                content, such as videos, animations, and interactive quizzes. These lessons provide an
                interactive learning experience and help users grasp driving concepts effectively.`
            },
            {
                id: 6,
                title: "Question Bank",
                icon: "bi bi-box-fill",
                description: `Includes a comprehensive question bank with a wide range of
                multiple-choice questions. The questions cover different driving scenarios and test the user's
                knowledge of traffic rules, road signs, and driving techniques.`
            }

        ]

    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        // <div style={{ display: "flex", flexDirection: "row" }}>
        //     {[0, 1, 2].map(i => {
        //         console.log('list', i, (index + i) % cardList.length)
        //         return (
        //             <Carousel 
        //                 defaultActiveIndex={i} 
        //                 style={{flex: 1/3}} 
        //                 wrap 
        //                 activeIndex={(index + i) % cardList.length} 
        //                 onSelect={(n) => { if (i == 0) { handleSelect(n) } }}
        //             >
        //                 {cardList.map((card) =>
        //                     <CarouselItem key={card.id}>
        //                         <CarousalCard icon={card.icon} description={card.description} />
        //                     </CarouselItem>

        //                 )}
        //             </Carousel>
        //         )
        //     })}



        // </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "row",alignItems:'center'}}>
            <div>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Our services</h1>
                <Carousel
                    activeIndex={(index)}
                    onSelect={handleSelect}
                    

                >
                    {cardList.map((card) =>
                        <CarouselItem key={card.id} >
                            <CarousalCard icon={card.icon} description={card.description} />
                        </CarouselItem>

                    )}
                </Carousel>
            </div>

        </div>


    );
}