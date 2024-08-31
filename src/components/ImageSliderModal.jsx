import React, { useState } from 'react'

const ImageSliderModal = ({ images, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
            <button
                className="absolute bg-black bg-opacity-40 p-2 rounded top-8 right-8 text-white text-3xl z-50"
                onClick={onClose}
            >
                X
            </button>
            {/* Изображение */}
            <img
                src={images[currentIndex]}
                alt="Slider"
                className="w-full max-h-[80vh] object-contain"
            />
            {/* Кнопки переключения */}
            <div className="flex mt-4 space-x-4">
                <button
                    className="text-white bg-black bg-opacity-40 p-2 rounded text-4xl"
                    onClick={goToPrevious}
                >
                    &lt;
                </button>
                <button
                    className="text-white bg-black bg-opacity-40 p-2 rounded text-4xl"
                    onClick={goToNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default ImageSliderModal
