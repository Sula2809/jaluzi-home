import React, { useState } from 'react'
import ImageSliderModal from './ImageSliderModal'

const RollShtory = () => {
        const images = [
            '/roll/roll1.png',
            '/roll/roll2.png',
            '/roll/roll3.png',
            '/roll/roll4.png',
            '/roll/roll5.png',
        ]
        const [isModalOpen, setIsModalOpen] = useState(false)

        const openModal = () => {
            setIsModalOpen(true)
        }

        const closeModal = () => {
            setIsModalOpen(false)
        }
    return (
        <section
            className="container"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="bg-white max-w-[1475px] rounded p-12 space-y-12">
                <h1 className="text-h3 text-center uppercase">РОЛЛ-ШТОРЫ</h1>
                <div className="flex justify-between gap-16">
                    <div className="w-2/5 relative">
                        <img
                            src="/images/roll-shtory.png"
                            alt="Ролл-шторы"
                            className="size-full"
                        />
                        <div
                            className="absolute top-0 left-0 bg-secondary opacity-0 hover:opacity-50 duration-300 cursor-pointer size-full flex justify-center items-center"
                            onClick={openModal}
                        >
                            <span className="text-primary">
                                Нажмите для просмотра
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 w-3/5">
                        <h3 className="text-body1">
                            Однотонные ролл-шторы - идеальный выбор для
                            поклонников минимализма.
                        </h3>
                        <p className="text-body1">
                            Их легко устанавливать на створки окон, обеспечивая
                            отличную защиту от солнца, при этом оставаясь
                            незаметными. Эти стильные шторы могут быть
                            установлены дополнительно к тканевым шторам.
                        </p>
                        <p className="text-body1">
                            Закажите свои шторы прямо сейчас!
                        </p>
                        <a
                            className="bg-primary-foreground max-w-[268px] mt-auto py-3 px-16 text-secondary text-h4 rounded hover:bg-primary duration-300"
                            href="https://wa.me/996775982180?text=Здравствуйте%2C+у+меня+есть+вопрос"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Заказать
                        </a>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <ImageSliderModal images={images} onClose={closeModal} />
            )}
        </section>
    )
}

export default RollShtory
