import React from 'react'

const Office = () => {
    return (
        <section className="container p-0">
            <div className="relative max-w-[1475px] mx-auto">
                <img
                    src="/images/office.png"
                    alt="Офис"
                    className="size-full object-cover min-h-[320px]"
                />
                <p className="text-body3 md:text-body2 lg:text-body1  font-extrabold absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] mx-auto max-w-[384px] md:max-w-[1298px] w-full bg-secondary p-1 rounded">
                    Офис - это место, где все должно быть продумано и оформлено
                    в сдержанном стиле. Отличным и практичным решением станут
                    жалюзи на большие пластиковые окна в офис.
                </p>

                <img
                    src="/images/icons/main-logo2.svg"
                    alt="Логотип"
                    className="absolute right-[4%] bottom-[8%] max-w-[62px] md:max-w-[122px]"
                />
            </div>
        </section>
    )
}

export default Office
