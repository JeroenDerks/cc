import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { styled } from "@mui/material";
import { Button } from "@mui/material";
import Flex from "components/Flex";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { border } from "theme";
import ProductImageOne from "components/ProductImage/ProductImageOne";
import ProductImageTwo from "components/ProductImage/ProductImageTwo";
// import ProductImageThree from "components/ProductImage/ProductImageThree";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Image = styled("img")({
  width: "100%",
  height: "100%",
  border,
});

const SwiperButton = styled(Button)({
  padding: 0,
  width: 40,
  maxWidth: 40,
  minWidth: 40,
});

const ImageGallery = ({ id }: { id: string }) => {
  return (
    <Flex sx={{ border }}>
      <Flex width={40} sx={{ border }}>
        <SwiperButton className={`swiper-prev-${id}`}>
          <ChevronLeftIcon />
        </SwiperButton>
      </Flex>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation={{
          nextEl: `.swiper-next-${id}`,
          prevEl: `.swiper-prev-${id}`,
        }}
        loop
        // autoplay={{ disableOnInteraction: true, delay: 2000 }}
      >
        <SwiperSlide>
          <ProductImageTwo id={id} />
        </SwiperSlide>

        <SwiperSlide>
          <ProductImageOne id={id} />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
          />
        </SwiperSlide>
      </Swiper>

      <Flex width={40} sx={{ border }}>
        <SwiperButton className={`swiper-next-${id}`}>
          <ChevronRightIcon />
        </SwiperButton>
      </Flex>
    </Flex>
  );
};

export default ImageGallery;
