import React, { useState } from 'react'
import ImageSliderModal from './ImageSliderModal'

const ProductsCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [images, setImages] = useState([])

    const openModal = (imageArray) => {
        console.log('image: ', imageArray)

        setImages(imageArray)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <section className="container relative p-0" id={'productsCategory'}>
            <div className="bg-white pb-8 sm:pb-10 md:pb-14 lg:pb-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-8 sm:px-14 md:px-20 lg:px-24 space-y-5 sm:space-y-7 md:space-y-9 lg:space-y-11 max-w-[1474px] mt-0 md:-mt-40 rounded z-50">
                <h1 className="text-body2 md:text-h4 lg:text-h3 flex justify-center">
                    Категории продуктов
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            src: '/CategoryImages/Alluminium/category-image1.png',
                            imgs: [
                                '/CategoryImages/Alluminium/category-image1.png',
                                '/CategoryImages/Alluminium/alluminium2.png',
                            ],
                            alt: 'image1',
                            title: 'Алюминевые',
                        },
                        {
                            src: '/CategoryImages/Vertical/category-image2.png',
                            imgs: [
                                '/CategoryImages/Vertical/vertical1.png',
                                '/CategoryImages/Vertical/vertical2.png',
                                '/CategoryImages/Vertical/vertical3.png',
                                '/CategoryImages/Vertical/vertical4.png',
                                '/CategoryImages/Vertical/vertical5.png',
                                '/CategoryImages/Vertical/vertical6.png',
                                '/CategoryImages/Vertical/vertical7.png',
                            ],
                            alt: 'image2',
                            title: 'Вертикальные',
                        },
                        {
                            src: '/CategoryImages/DayNight/category-image3.png',
                            imgs: [
                                '/CategoryImages/DayNight/DayNight1.png',
                                '/CategoryImages/DayNight/DayNight2.png',
                                '/CategoryImages/DayNight/DayNight3.png',
                                '/CategoryImages/DayNight/DayNight4.png',
                                '/CategoryImages/DayNight/DayNight5.png',
                                '/CategoryImages/DayNight/DayNight6.png',
                                '/CategoryImages/DayNight/DayNight7.png',
                                '/CategoryImages/DayNight/DayNight8.png',
                                '/CategoryImages/DayNight/DayNight9.png',
                                '/CategoryImages/DayNight/DayNight10.png',
                            ],
                            alt: 'image3',
                            title: 'День-Ночь',
                        },
                        {
                            src: '/CategoryImages/Roll/category-image4.png',
                            imgs: [
                                '/CategoryImages/Roll/Roll1.png',
                                '/CategoryImages/Roll/Roll2.png',
                                '/CategoryImages/Roll/Roll3.png',
                                '/CategoryImages/Roll/Roll4.png',
                                '/CategoryImages/Roll/Roll5.png',
                                '/CategoryImages/Roll/Roll6.png',
                                '/CategoryImages/Roll/Roll7.png',
                                '/CategoryImages/Roll/Roll8.png',
                            ],
                            alt: 'image4',
                            title: 'Рулонные',
                        },
                        {
                            src: '/CategoryImages/Cassete/category-image5.png',
                            imgs: [
                                '/CategoryImages/Cassete/cassete1.png',
                                '/CategoryImages/Cassete/cassete2.png',
                                '/CategoryImages/Cassete/cassete3.png',
                                '/CategoryImages/Cassete/cassete4.png',
                                '/CategoryImages/Cassete/cassete5.png',
                            ],
                            alt: 'image5',
                            title: 'Касетные',
                        },
                        {
                            src: '/CategoryImages/Rome/category-image6.png',
                            imgs: [
                                '/CategoryImages/Rome/rome1.png',
                                '/CategoryImages/Rome/rome2.png',
                            ],
                            alt: 'image6',
                            title: 'Римские',
                        },
                    ].map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="relative">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="max-w-[423px] max-h-[400px] rounded size-full"
                                />
                                <div
                                    className="absolute top-0 left-0 bg-secondary opacity-0 hover:opacity-50 duration-300 cursor-pointer size-full flex justify-center items-center"
                                    onClick={() => openModal(item.imgs)}
                                >
                                    <span className="text-primary hidden md:inline">
                                        Нажмите для просмотра
                                    </span>
                                </div>
                            </div>
                            <h5 className="text-body4 md:text-body3 lg:text-body2">
                                Жалюзи
                            </h5>
                            <h3 className="text-body-3 md:text-body2 lg:text-body1 font-extrabold">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <ImageSliderModal images={images} onClose={closeModal} />
            )}
        </section>
    )
}

export default ProductsCategory
