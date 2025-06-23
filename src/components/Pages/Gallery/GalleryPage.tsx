import { Swiper, SwiperSlide } from "swiper/react";
import GalleryList from "../../Lists/GalleryList";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function GalleryPage() {
  return (
    <main id="gallery-page">
      <p className="mega-title text-center">ФОТОГАЛЕРЕЯ</p>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {GalleryList.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className="rounded-3xl" alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <iframe
        className="video"
        src="https://vkvideo.ru/video_ext.php?oid=-49436187&id=456239020&hash=d1e73032ab55b54d"
        width="640"
        height="360"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </main>
  );
}
