import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary py-20 flex text-secondary">
            <div className="container flex justify-between flex-wrap">
                <div>
                    <img src="/images/icons/main-logo3.svg" alt="Light logo" />
                </div>
                <div>
                    <ul className="space-y-6">
                        <li className="text-body1">Категории продуктов</li>
                        <li className="text-body1">Причины выбрать нас</li>
                        <li className="text-body1">Популярные товары</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-6">
                        <li className="text-body1">День - ночь</li>
                        <li className="text-body1">Рулонные</li>
                        <li className="text-body1">Вертикальные</li>
                        <li className="text-body1">C принтами</li>
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
                                <span className="text-body2">
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
                                <span className="text-body2">
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
                                <span className="text-body2">
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
