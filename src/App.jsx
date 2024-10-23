import React, { useState } from 'react';
import './Slideshow.css';

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Hàm cập nhật hình ảnh dựa trên chỉ số hiện tại
    const updateImage = () => `https://picsum.photos/300/200?image=${currentIndex}`;

    // Hàm hiển thị hình ảnh trước đó
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Hàm hiển thị hình ảnh tiếp theo
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };

    // Hàm quay lại hình ảnh đầu tiên
    const restartSlideshow = () => {
        setCurrentIndex(0);
    };

    return (
        <div className="slideshow-container">
            <img className="slide-image" src={updateImage()} alt="Slideshow" />
            <div className="button-container">
                <button className="slide-button" onClick={prevSlide}>Previous</button>
                <button className="slide-button" onClick={nextSlide}>Next</button>
                <button className="slide-button" onClick={restartSlideshow}>Back to Start</button>
            </div>
        </div>
    );
}

export default Slideshow;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
