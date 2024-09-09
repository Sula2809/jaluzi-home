import React, { useState } from 'react'
import ImageSliderModal from './ImageSliderModal'

const categoriesData = [
    {
        src: '/CategoryImages/Alluminium/category-image1.png',
        imgs: [
            '/CategoryImages/Alluminium/category-image1.png',
            '/CategoryImages/Alluminium/alluminium2.png',
        ],
        alt: 'image1',
        title: 'Алюминевые',
        description: 'Жалюзи',
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
            '/CategoryImages/Vertical/vertical2-1.png',
            '/CategoryImages/Vertical/vertical2-2.png',
            '/CategoryImages/Vertical/vertical2-3.png',
            '/CategoryImages/Vertical/vertical2-4.png',
            '/CategoryImages/Vertical/vertical2-5.png',
            '/CategoryImages/Vertical/vertical2-6.png',
            '/CategoryImages/Vertical/vertical2-7.png',
            '/CategoryImages/Vertical/vertical2-8.png',
            '/CategoryImages/Vertical/vertical2-9.png',
            '/CategoryImages/Vertical/vertical2-10.png',
            '/CategoryImages/Vertical/vertical2-11.png',
            '/CategoryImages/Vertical/vertical2-12.png',
            '/CategoryImages/Vertical/vertical2-13.png',
            '/CategoryImages/Vertical/vertical2-14.png',
            '/CategoryImages/Vertical/vertical2-15.png',
            '/CategoryImages/Vertical/vertical2-16.png',
            '/CategoryImages/Vertical/vertical2-17.png',
            '/CategoryImages/Vertical/vertical2-18.png',
            '/CategoryImages/Vertical/vertical2-19.png',
            '/CategoryImages/Vertical/vertical2-20.png',
            '/CategoryImages/Vertical/vertical2-21.png',
            '/CategoryImages/Vertical/vertical2-22.png',
            '/CategoryImages/Vertical/vertical2-23.png',
        ],
        alt: 'image2',
        title: 'Вертикальные',
        description: 'Жалюзи',
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
            '/CategoryImages/DayNight/DN1.png',
            '/CategoryImages/DayNight/DN2.png',
            '/CategoryImages/DayNight/DN3.png',
            '/CategoryImages/DayNight/DN4.png',
            '/CategoryImages/DayNight/DN5.png',
            '/CategoryImages/DayNight/DN6.png',
            '/CategoryImages/DayNight/DN7.png',
            '/CategoryImages/DayNight/DN8.png',
            '/CategoryImages/DayNight/DN9.png',
            '/CategoryImages/DayNight/DN10.png',
            '/CategoryImages/DayNight/DN11.png',
            '/CategoryImages/DayNight/DN12.png',
            '/CategoryImages/DayNight/DN13.png',
            '/CategoryImages/DayNight/DN14.png',
            '/CategoryImages/DayNight/DN15.png',
            '/CategoryImages/DayNight/DN16.png',
            '/CategoryImages/DayNight/DN17.png',
            '/CategoryImages/DayNight/DN18.png',
            '/CategoryImages/DayNight/DN19.png',
            '/CategoryImages/DayNight/DN20.png',
            '/CategoryImages/DayNight/DN21.png',
            '/CategoryImages/DayNight/DN22.png',
            '/CategoryImages/DayNight/DN23.png',
            '/CategoryImages/DayNight/DN24.png',
            '/CategoryImages/DayNight/DN25.png',
            '/CategoryImages/DayNight/DN26.png',
            '/CategoryImages/DayNight/DN27.png',
            '/CategoryImages/DayNight/DN28.png',
            '/CategoryImages/DayNight/DN29.png',
            '/CategoryImages/DayNight/DN30.png',
            '/CategoryImages/DayNight/DN31.png',
            '/CategoryImages/DayNight/DN32.png',
            '/CategoryImages/DayNight/DN33.png',
        ],
        alt: 'image3',
        title: 'День-Ночь',
        description: 'Ролл-шторы',
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
            '/CategoryImages/Roll/roll2-1.png',
            '/CategoryImages/Roll/roll2-2.png',
            '/CategoryImages/Roll/roll2-3.png',
            '/CategoryImages/Roll/roll2-4.png',
            '/CategoryImages/Roll/roll2-5.png',
            '/CategoryImages/Roll/roll2-6.png',
            '/CategoryImages/Roll/roll2-7.png',
            '/CategoryImages/Roll/roll2-8.png',
            '/CategoryImages/Roll/roll2-9.png',
            '/CategoryImages/Roll/roll2-10.png',
            '/CategoryImages/Roll/roll2-11.png',
            '/CategoryImages/Roll/roll2-12.png',
            '/CategoryImages/Roll/roll2-13.png',
        ],
        alt: 'image4',
        title: 'Рулонные',
        description: 'Ролл-шторы',
    },
    {
        src: '/CategoryImages/Cassete/category-image5.png',
        imgs: [
            '/CategoryImages/Cassete/cassete1.png',
            '/CategoryImages/Cassete/cassete2.png',
            '/CategoryImages/Cassete/cassete3.png',
            '/CategoryImages/Cassete/cassete4.png',
            '/CategoryImages/Cassete/cassete5.png',
            '/CategoryImages/Cassete/cassete2-1.png',
            '/CategoryImages/Cassete/cassete2-2.png',
            '/CategoryImages/Cassete/cassete2-3.png',
            '/CategoryImages/Cassete/cassete2-4.png',
            '/CategoryImages/Cassete/cassete2-5.png',
        ],
        alt: 'image5',
        title: 'Касетные',
        description: 'Ролл-шторы',
    },
    {
        src: '/CategoryImages/Rome/category-image6.png',
        imgs: [
            '/CategoryImages/Rome/rome1.png',
            '/CategoryImages/Rome/rome2.png',
        ],
        alt: 'image6',
        title: 'Римские',
        description: 'Ролл-шторы',
    },
]

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
            <div className="bg-white mx-auto pb-8 sm:pb-10 md:pb-14 lg:pb-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-8 sm:px-14 md:px-20 lg:px-24 space-y-5 sm:space-y-7 md:space-y-9 lg:space-y-11 max-w-[1474px] mt-0 md:-mt-40 md:rounded-2xl z-50 shadow-[#444] shadow-md ">
                <h1 className="text-body2 md:text-h4 lg:text-h3 flex justify-center">
                    Категории продуктов
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {categoriesData.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="relative">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="max-w-[423px] max-h-[400px] rounded-xl size-full"
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
                                {item.description}
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
