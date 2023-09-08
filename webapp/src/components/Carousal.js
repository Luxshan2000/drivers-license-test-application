import React from "react";
import CarousalCard from './CarousalCard'
// import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
// const CustomDot = ({ onMove, index, onClick, active }) => {
//     return (
//       <li
//         className={active ? "active" : "inactive"}
//         onClick={() => onClick()}
//       >
        
//       </li>
//     );
//   };

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
                scoring,help users familiarize themselves with the exam format.`
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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        
        <div>
            <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            renderButtonGroupOutside={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={4000}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            sliderClass="carousel-card"
        >
            {cardList.map((card)=>
                <div>
                    <CarousalCard title={card.title} icon={card.icon} description={card.description}/>
                </div>
            )}
        </Carousel>

        </div>

        
        


    );
}