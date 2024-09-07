import React from 'react'

const CallUs = () => {
    return (
        <section className="relative">
            <img
                src="/images/image1.png"
                alt="main image"
                className="size-full object-cover min-h-[488px]"
            />
            <div className="absolute size-full top-0 left-0 bg-secondary opacity-50"></div>
            <div className="absolute top-[20%] left-[6%] space-y-2 lg:space-y-10">
                <p className="text-body1 md:text-h2 font-extrabold max-w-[342px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1140px] ">
                    БОЛЕЕ 15 ЛЕТ НА РЫНКЕ КЫРГЫЗСТАНА, МЫ ПРОФЕССИОНАЛЬНО
                    ОКАЗЫВАЕМ УСЛУГИ ПО ИЗГОТОВЛЕНИЮ И УСТАНОВКЕ ЛЮБОЙ СЛОЖНОСТИ
                    ЖАЛЮЗИ И РОЛЛ-ШТОР.
                </p>
                <a
                    className="md:text-body2 inline-block text-body4 font-extrabold bg-primary-foreground text-secondary rounded py-2 md:py-4 px-5 md:px-16 hover:text-primary hover:bg-secondary duration-300"
                    href="tel:996775982180"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Позвонить
                </a>
            </div>
        </section>
    )
}

export default CallUs
