import React from 'react'

const Office = () => {
  return (
      <section
          className="container"
      >
          <div className="relative max-w-[1475px]">
              <img src="/images/office.png" alt="Офис" className="size-full" />
              <p className="text-body1 font-extrabold absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] mx-auto max-w-[1298px] w-full bg-secondary p-1 rounded">
                  Офис - это место, где все должно быть продумано и оформлено в
                  сдержанном стиле. Отличным и практичным решением станут жалюзи
                  на большие пластиковые окна в офис.
              </p>

              <img
                  src="/images/icons/main-logo2.svg"
                  alt="Логотип"
                  className="absolute right-[4%] bottom-[8%]"
              />
          </div>
      </section>
  )
}

export default Office