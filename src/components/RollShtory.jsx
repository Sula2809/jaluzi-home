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
        <section className="container p-0" id={'roll'}>
            <div className="bg-white max-w-[1475px] mx-auto rounded p-3 sm:p-6 md:p-9 lg:p-12 space-y-5 md:space-y-12">
                <h1 className="lg:text-h3 md:text-h4 sm:text-body1 text-body2 text-center uppercase">
                    РОЛЛ-ШТОРЫ
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-7 md:gap-10 lg:gap-16">
                    <div className="w-full md:w-2/5 relative">
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
                    <div className="flex flex-col gap-7 w-full md:w-3/5">
                        <h3 className="text-body3 sm:text-body2 md:text-body1">
                            Однотонные ролл-шторы - <br />
                            идеальный выбор для поклонников минимализма.
                        </h3>
                        <p className="text-body3 sm:text-body2 md:text-body1">
                            Их легко устанавливать на створки окон, обеспечивая
                            отличную защиту от солнца, при этом незаметные. Эти
                            стильные шторы могут быть установлены дополнительно
                            к тканевым шторам.
                        </p>
                        <p className="text-body3 sm:text-body2 md:text-body1">
                            Закажите свои шторы прямо сейчас! <br /> Наш{' '}
                            <strong className="text-primary-foreground">
                                дизайнер
                            </strong>{' '}
                            окажет вам профессиональную консультацию.
                        </p>
                        <a
                            className="bg-primary-foreground max-w-[148px] md:max-w-[268px] mt-auto py-2 md:py-3 px-8 md:px-16 text-secondary text-body3 sm:text-body2 md:text-body1 lg:text-h4 rounded hover:bg-primary duration-300"
                            href="https://wa.me/996775982180?text=Здравствуйте%2C+у+меня+есть+вопрос"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Связаться
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
