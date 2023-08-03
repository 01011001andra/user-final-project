// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
const SwiperPengurus = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex gap-5 items-center">
      <button className="text-4xl font-bold px-2" ref={prevRef}>
        &lt;
      </button>
      <Swiper
        // install Swiper modules
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={40}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="flex gap-5"
      >
        <SwiperSlide>
          <div class="w-full border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
            <div class="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <img
                  src="https://picsum.photos/seed/2/200/200"
                  class="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div class="col-span-5 md:col-span-4 ml-4">
                <p class="text-sky-500 font-bold text-xs uppercase">
                  {" "}
                  Imam Masjid{" "}
                </p>

                <p class="text-gray-600 font-bold">Yandra Muslim</p>

                <p class="text-gray-400"> Mar 2023 - Sekarang </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="w-full border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
            <div class="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <img
                  src="https://picsum.photos/seed/2/200/200"
                  class="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div class="col-span-5 md:col-span-4 ml-4">
                <p class="text-sky-500 font-bold text-xs uppercase">
                  {" "}
                  Imam Masjid{" "}
                </p>

                <p class="text-gray-600 font-bold">Yandra Muslim</p>

                <p class="text-gray-400"> Mar 2023 - Sekarang </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="w-full border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
            <div class="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <img
                  src="https://picsum.photos/seed/2/200/200"
                  class="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div class="col-span-5 md:col-span-4 ml-4">
                <p class="text-sky-500 font-bold text-xs uppercase">
                  {" "}
                  Imam Masjid{" "}
                </p>

                <p class="text-gray-600 font-bold">Yandra Muslim</p>

                <p class="text-gray-400"> Mar 2023 - Sekarang </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="w-full border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
            <div class="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <img
                  src="https://picsum.photos/seed/2/200/200"
                  class="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div class="col-span-5 md:col-span-4 ml-4">
                <p class="text-sky-500 font-bold text-xs uppercase">
                  {" "}
                  Imam Masjid{" "}
                </p>

                <p class="text-gray-600 font-bold">Yandra Muslim</p>

                <p class="text-gray-400"> Mar 2023 - Sekarang </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="text-4xl font-bold px-2" ref={nextRef}>
        &gt;
      </button>
    </div>
  );
};

export default SwiperPengurus;
