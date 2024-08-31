import React, { useState } from 'react'
import ImageSliderModal from './ImageSliderModal'

const JaluziPrint = () => {
    const images = [
        '/day-night/day-night1.png',
        '/day-night/day-night2.png',
        '/day-night/day-night3.png',
        '/day-night/day-night4.png',
        '/day-night/day-night5.png',
        '/day-night/day-night6.png',
        '/day-night/day-night7.png',
        '/day-night/day-night8.png',
    ]
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <section className="container p-0 pb-2 md:pb-24">
            <div className="bg-white max-w-[1475px] rounded p-3 sm:p-6 md:p-9 lg:p-12 space-y-5 md:space-y-12">
                <h1 className="lg:text-h3 md:text-h4 sm:text-body1 text-body2 text-center uppercase">
                    Жалюзи и ролл-шторы c принтами
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-7 md:gap-10 lg:gap-16">
                    <div className="w-full md:w-2/5 relative">
                        <img
                            src="/images/print-shtory.png"
                            alt=""
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
                            Обратите внимание на наши уникальные ролл-шторы и{' '}
                            <br />
                            жалюзи, не только в однотонных оттенках, но и c
                            <br />
                            разнообразными захватывающими принтами!!!
                        </h3>
                        <p className="text-body3 sm:text-body2 md:text-body1">
                            Приглашаем Bac, в наш салон, что бы увидеть весь
                            ассортимент. <br />
                            Либо, Вы можете пригласить нашего дизайнера, который
                            профессионально поможет Вам подобрать стиль и
                            сделать точный замер желаемого изделия.
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

export default JaluziPrint
