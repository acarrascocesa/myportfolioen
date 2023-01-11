import "./certificates.css"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css/pagination"
import "swiper/css"
import React from "react"
import react from "./img/react.jpg"
import fundations from "./img/fundations.jpg"
import python from "./img/python.png"
import introduction from "./img/introduction.jpg"
import algo from "./img/algo.jpg"
import logic from "./img/logic.jpg"
import english from "./img/english.png"
import node from "./img/node.png"
import full from "./img/full.png"


const Certificates = () => {
    const certificates = [
        {
            img: full,
            name: "Fullstack Developer"
        },
        {
            img: node,
            name: "Backend Developer with Node"
        },
        {
            img: react,
            name: "Frontend Developer with React"
        },
        {
            img: fundations,
            name: "Fundations in Javascript, CSS and HTML"
        },
        {
            img: introduction,
            name: "Programming Concepts"
        },
        {
            img: python,
            name: "Introduction to Python"
        },
        {
            img: logic,
            name: "Fundamentals and Logic of Programming"
        },
        {
            img: algo,
            name: "Algorithms Course"
        },
        {
            img: english,
            name: "English C1 Advance"
        }
    ]
  return (
    <div className="c-wrapper" id="Certificates">
        <div className="c-heading">
            <span>These are my </span>
            <span>Certificates</span>
        </div>
        <Swiper
        spaceBetween={300}
        slidesPerView={2}
        grabCursor={true}
        className="projects-slider"
        >
            {certificates.map((certificate, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="certificates">
                        <img src={certificate.img} alt="" />
                        <span>{certificate.name}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Certificates