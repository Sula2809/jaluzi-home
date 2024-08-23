import React from 'react'

const CallUs = () => {
    return (
        <section
            className="relative"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <img
                src="/images/image1.png"
                alt="main image"
                className="size-full"
            />
            <div className="absolute size-full top-0 left-0 bg-secondary opacity-50"></div>
            <div className="absolute top-[20%] left-[6%] container space-y-10">
                <p className="text-body-3 md:text-h2 font-extrabold max-w-[1012px] p-2.5">
                    БОЛЕЕ 15 ЛЕТ МЫ ДОБРОСОВЕСТНО И КАЧЕСТВЕННО ОКАЗЫВАЕМ УСЛУГИ
                    ЗАКАЗЧИКАМ
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
