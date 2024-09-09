import React from 'react'

const Vertical = () => {
  return (
      <section className="container p-0" id={'vertical'}>
          <div className="relative max-w-[1475px] mx-auto min-h-[340px]">
              <img
                  src="/images/office2.png"
                  alt="Офис"
                  className="size-full object-fill min-h-[340px] rounded-2xl shadow-[#444] shadow-md"
              />
              <img
                  src="/images/icons/jaluzi-home-light.svg"
                  alt="light icon"
                  className="absolute top-2 sm:top-5 md:top-9 lg:top-14 left-4 sm:left-7 md:left-11 lg:left-16 size-10 sm:size-14 md:size-24 lg:size-32"
              />
              <div className="absolute bottom-[6%] left-[3%] flex flex-col gap-2.5 md:gap-8 p-2.5">
                  <p className="bg-secondary p-2.5 rounded-xl text-body3 md:text-body2 lg:text-h3 inline-block max-w-[488px]">
                      Вертикальные жалюзи
                  </p>
                  <p className="bg-secondary p-2.5 rounded-xl text-body3 md:text-body2 lg:text-h4 max-w-[740px]">
                      Удобные и стильные вертикальные жалюзи.
                  </p>
                  <p className="bg-secondary p-2.5 rounded-xl text-body3 md:text-body2 lg:text-h4">
                      Привнесите свежесть в ваш интерьер с легкостью управления
                      светом.
                  </p>
                  <a
                      className="bg-primary-foreground max-w-[148px] md:max-w-[268px] mt-auto py-2 md:py-3 text-center text-secondary text-body3 sm:text-body2 md:text-body1 lg:text-h4 rounded-2xl hover:bg-primary duration-300 "
                      href="https://wa.me/996775982180?text=Здравствуйте%2C+у+меня+есть+вопрос"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Связаться
                  </a>
              </div>
          </div>
      </section>
  )
}

export default Vertical