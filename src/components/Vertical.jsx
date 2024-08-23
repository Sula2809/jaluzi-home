import React from 'react'

const Vertical = () => {
  return (
      <section
          className="container"
          data-aos="fade-up"
          data-aos-duration="2000"
      >
          <div className="relative max-w-[1475px]">
              <img src="/images/office2.png" alt="Офис" className="size-full" />
              <img
                  src="/images/icons/jaluzi-home-light.svg"
                  alt="light icon"
                  className="absolute top-2 sm:top-5 md:top-9 lg:top-14 left-4 sm:left-7 md:left-11 lg:left-16 size-10 sm:size-14 md:size-24 lg:size-32"
              />
              <div className="absolute bottom-[6%] left-[3%] space-y-5 p-2.5">
                  <p className="bg-secondary rounded text-body4 sm:text-body3 md:text-body2 lg:text-h3 inline-block max-w-[488px]">
                      Вертикальные жалюзи
                  </p>
                  <p className="bg-secondary rounded text-body4 sm:text-body3 md:text-body2 lg:text-h4 max-w-[740px]">
                      Удобные и стильные вертикальные жалюзи.
                  </p>
                  <p className="bg-secondary rounded text-body4 sm:text-body3 md:text-body2 lg:text-h4">
                      Привнесите свежесть в ваш интерьер с легкостью управления
                      светом.
                  </p>
              </div>
          </div>
      </section>
  )
}

export default Vertical