import React from 'react'

const ChooseUsReasons = () => {
  return (
      <section
          className="container"
          data-aos="fade-up"
          data-aos-duration="2000"
      >
          <div className="bg-white max-w-[1475px] rounded p-12 space-y-12">
              <h1 className="text-h3 text-center">Причины выбрать нас</h1>
              <div className="flex justify-between gap-16">
                  <div className="w-2/5 relative">
                      <img
                          src="/images/select-us.png"
                          alt="Причины выбрать нас"
                          className="size-full"
                      />
                  </div>
                  <div className="grid grid-cols-2 justify-between gap-x-40 mt-10">
                      <div className="max-w-[326px] space-y-5">
                          <div>
                              <img
                                  src="/images/icons/pen-ruler.svg"
                                  alt="Иконка линейки"
                              />
                          </div>
                          <p className="text-body1">
                              Бесплатный выезд дизайнера-замерщика с подбором из
                              каталога.
                          </p>
                      </div>
                      <div className="max-w-[326px] space-y-5">
                          <div>
                              <img
                                  src="/images/icons/pen-ruler.svg"
                                  alt="Иконка линейки"
                              />
                          </div>
                          <p className="text-body1">
                              Изготовление по индивидуальным размерам.
                          </p>
                      </div>
                      <div className="max-w-[326px] space-y-5">
                          <div>
                              <img
                                  src="/images/icons/pen-ruler.svg"
                                  alt="Иконка линейки"
                              />
                          </div>
                          <p className="text-body1">
                              Профессиональный монтаж, включая нестандартные
                              конструкции.
                          </p>
                      </div>
                      <div className="max-w-[326px] space-y-5">
                          <div>
                              <img
                                  src="/images/icons/pen-ruler.svg"
                                  alt="Иконка линейки"
                              />
                          </div>
                          <p className="text-body1">
                              Гарантия отличного решения для вашего
                              пространства.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
};

export default ChooseUsReasons;