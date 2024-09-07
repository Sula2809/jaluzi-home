export const Header = () => {
    return (
        <header className="space-y-2 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <div className="flex justify-between items-center gap-2 sm:gap-0 container py-5">
                <div>
                    <span className="flex items-center gap-[10px]">
                        <img
                            src="/images/icons/location-pin.svg"
                            alt="Location pin"
                            className="size-6 md:size-7 lg:size-8"
                        />
                        <span className="text-primary-foreground text-body4 sm:text-body3 md:text-body2">
                            Бишкек, Кыргызстан
                        </span>
                    </span>
                </div>
                <div>
                    <img
                        src="/images/icons/jaluzi-home.svg"
                        alt="Jaluzi Home Logo"
                        className="max-w-[80px]"
                    />
                </div>
                <div className="flex items-center gap-1 md:gap-2.5">
                    <a
                        href="https://wa.me/996775982180?text=Здравствуйте%2C+у+меня+есть+вопрос"
                    >
                        <img
                            src="/images/icons/WhatsApp.svg"
                            alt="WhatsApp icon"
                            className="size-6 md:size-7 lg:size-8"
                        />
                    </a>
                    <a
                        href="tel:996775982180"
                        className="flex items-center gap-1 md:gap-2.5"
                    >
                        <img
                            src="/images/icons/phone.svg"
                            alt="Phone icon"
                            className="size-6 md:size-7 lg:size-8"
                        />
                        <span className="text-primary-foreground text-body4 sm:text-body3 md:text-body2">
                            +996775982180
                        </span>
                    </a>
                </div>
            </div>
            <div className="bg-primary">
                <div className="container flex justify-center items-center gap-2 md:gap-5 py-1 sm:py-2 md:py-4">
                    <span className="text-secondary uppercase text-body4 sm:text-body3 md:text-body2 lg:text-body1 font-normal">
                        Жалюзи
                    </span>
                    <span className="size-1.5 md:size-3 rounded-full bg-secondary"></span>
                    <span className="text-secondary uppercase text-body4 sm:text-body3 md:text-body2 lg:text-body1 font-normal">
                        Ролл-шторы
                    </span>
                </div>
            </div>
        </header>
    )
}
