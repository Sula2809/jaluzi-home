import React from 'react'

const data = [
    {
        img: '/images/icons/pen-ruler.svg',
        alt: 'Иконка линейки',
        title: 'Бесплатный выезд дизайнера-замерщика с подбором из каталога.',
    },
    {
        img: '/images/icons/scissors.svg',
        alt: 'Иконка линейки',
        title: 'Изготовление по индивидуальным размерам.',
    },
    {
        img: '/images/icons/pen-swirl.svg',
        alt: 'Иконка линейки',
        title: 'Профессиональный монтаж, включая нестандартные конструкции.',
    },
    {
        img: '/images/icons/cube.svg',
        alt: 'Иконка линейки',
        title: 'Гарантия отличного решения для вашего пространства.',
    },
]

const ChooseUsReasons = () => {
  return (
      <section className="container p-0" id={'chooseUs'}>
          <div className="bg-white max-w-[1475px] mx-auto rounded p-3 sm:p-6 md:p-9 lg:p-12 space-y-12 mt-4 md:mt-8 lg:mt-16">
              <h1 className="text-body1 md:text-h4 lg:text-h3 text-center">Причины выбрать нас</h1>
              <div className="flex justify-between gap-16">
                  <div className="w-2/5 relative hidden lg:block">
                      <img
                          src="/images/select-us.png"
                          alt="Причины выбрать нас"
                          className="size-full"
                      />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-x-40 md:mt-10">
                      {data.map((item, index) => (
                          <div className="md:max-w-[326px] w-full gap-4 mb-4 lg:space-y-5 flex md:flex-col" key={index}>
                              <div className="w-1/5">
                                  <img
                                        className='size-8 md:size-12 object-cover'
                                      src={item.img}
                                      alt={item.alt}
                                  />
                              </div>
                              <p className="text-body4 sm:text-body-3 md:text-body2 lg:text-body1 m-0">
                                  {item.title}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  )
};

export default ChooseUsReasons;