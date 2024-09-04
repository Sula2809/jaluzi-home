import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary py-20 flex text-secondary">
            <div className="container flex flex-col md:flex-row justify-between items-start gap-6 flex-wrap">
                <div>
                    <img className='max-w-[150px]' src="/images/icons/main-logo3.svg" alt="Light logo" />
                </div>
                <div>
                    <ul className="space-y-6">
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#productsCategory"
                                className="hover:underline duration-300"
                            >
                                Категории продуктов
                            </a>
                        </li>
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#chooseUs"
                                className="hover:underline duration-300"
                            >
                                Причины выбрать нас
                            </a>
                        </li>
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#popular"
                                className="hover:underline duration-300"
                            >
                                Популярные товары
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-6">
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#day&night"
                                className="hover:underline duration-300"
                            >
                                День - ночь
                            </a>
                        </li>
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#roll"
                                className="hover:underline duration-300"
                            >
                                Рулонные
                            </a>
                        </li>
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#vertical"
                                className="hover:underline duration-300"
                            >
                                Вертикальные
                            </a>
                        </li>
                        <li className="text-body3 md:text-body2 lg:text-body1">
                            <a
                                href="#print"
                                className="hover:underline duration-300"
                            >
                                C принтами
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-6">
                        <li>
                            <a
                                href="tel:996775982180"
                                className="flex items-center gap-5 hover:underline duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/icons/light-phone.svg"
                                    alt="Phone icon"
                                />
                                <span className="text-body3 md:text-body2 lg:text-body1">
                                    +996775982180
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/996775982180?text=Здравствуйте%2C+у+меня+есть+вопрос"
                                className="flex items-center gap-5 hover:underline duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/icons/WhatsApp.svg"
                                    alt="WhatsApp icon"
                                />
                                <span className="text-body3 md:text-body2 lg:text-body1">
                                    +996775982180
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/jaluzi_home_bishkek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="flex items-center gap-5 hover:underline duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/icons/instagram.svg"
                                    alt="Instagram icon"
                                />
                                <span className="text-body3 md:text-body2 lg:text-body1">
                                    jaluzi_home_bishkek
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
