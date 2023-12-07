import React from 'react';

// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


import {  FileUpload } from '../tempScreens';

const MainPage = () => {
    return (
        <div  style={{height: "87vh"}}>
            <h1>
                MainPage
            </h1>
            {/* <LoginFormTest/> */}
            Выгрузка файлов на сервер
            <FileUpload/>
            {/* <div>
                <MyCarousel/>
            </div> */}
        </div>
    )
}


// const MyCarousel = () => {
//   return (
//     <Carousel>
//     <Carousel.Item>
//       <img
//         // className="d-block "
//         src="https://via.placeholder.com/800x400?text=Slide+1"
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h3>Slide 1</h3>
//         <p>Description for Slide 1</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         // className="d-block "
//         src="https://via.placeholder.com/800x400?text=Slide+2"
//         alt="Second slide"
//       />
//       <Carousel.Caption>
//         <h3>Slide 2</h3>
//         <p>Description for Slide 2</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         // className="d-block "
//         src="https://via.placeholder.com/800x400?text=Slide+3"
//         alt="Third slide"
//       />
//       <Carousel.Caption>
//         <h3>Slide 3</h3>
//         <p>Description for Slide 3</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// );
// };

export default MainPage;