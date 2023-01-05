import {Swiper, SwiperSlide} from "swiper/react"
import "./projects.css"
import card from "./img/card.png"
import crudapp from "./img/crudapp.png"
import ecommerce from "./img/ecommerce.png"
import form from "./img/form.png"
import quotes from "./img/quotes.png"
import rickandmorty from "./img/rickandmorty.png"
import weatherapp from "./img/weatherapp.png"
import crypto from "./img/crypto.png"
import acdrinks from "./img/acdrinks.png"
import pokedex from "./img/pokedex.png"
import portfolio from "./img/portfolio.png"
import acshop from "./img/acshop.png"

import "swiper/css"

const Projects = () => {
  return (
    <div className="projects" id="Projects">
  
      <span>Projects</span>

        <Swiper
        spaceBetween={200}
        slidesPerView={2}
        grabCursor={true}
        className="projects-slider"
        >
            <SwiperSlide>
                <a href="https://accryptos.netlify.app" target="_blank"><img src={crypto} alt="crypto" /></a>
                <h2>Crypto Trade</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://acdrinks.netlify.app/" target="_blank"><img src={acdrinks} alt="acdrinks" /></a>
                <h2>Drink's Finder</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://acpokedex.netlify.app/" target="_blank"><img src={pokedex} alt="pokedex" /></a>
                <h2>Pokedex</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://reactportfolioac.netlify.app/" target="_blank"><img src={portfolio} alt="portfolio" /></a>
                <h2>Spanish Portfolio</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://acreactecommerce.netlify.app" target="_blank"><img src={ecommerce} alt="ecommerce" /></a>
                <h2>Ecommerce</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://ricknmortyappac.netlify.app" target="_blank"> <img src={rickandmorty} alt="rickandmorty" /></a>
                <h2>Rick and Morty App</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://acweatherapp.netlify.app" target="_blank"><img src={weatherapp} alt="weatherapp" /></a>
                <h2>Weather App</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://petshopac.netlify.app" target="_blank"><img src={form} alt="form" /></a>
                <h2>CRUD Form</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://accrudapp.netlify.app" target="_blank"><img src={crudapp} alt="crud" /></a>
                <h2>CRUD APP</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://acshophtmlcss.netlify.app/" target="_blank"><img src={acshop} alt="acshop" /></a>
                <h2>AC SHOP HTML|CSS</h2>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://acquotes.netlify.app" target="_blank"><img src={quotes} alt="quotes" /></a>
                <h2>Quotes App</h2>
            </SwiperSlide>
        </Swiper>
      
    </div>
  )
}

export default Projects
