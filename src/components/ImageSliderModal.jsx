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
        <div className="fixed inset-0 bg-black bg-opacity-50 w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <button
                className="absolute bg-black bg-opacity-40 p-2 rounded top-32 right-8 md:top-40 md:right-40 text-white text-3xl z-50"
                onClick={onClose}
            >
                X
            </button>
            <div className="relative max-w-full max-h-full p-4 rounded  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center">
                    <button
                        className="text-white bg-black bg-opacity-40 p-2 pt-0 rounded text-4xl mr-2"
                        onClick={goToPrevious}
                    >
                        &lt;
                    </button>
                    <img
                        src={images[currentIndex]}
                        alt="Slider"
                        className="max-w-[80vw] max-h-[80vh] object-contain"
                    />
                    <button
                        className="text-white bg-black bg-opacity-40 p-2 pt-0 rounded text-4xl ml-2"
                        onClick={goToNext}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageSliderModal
