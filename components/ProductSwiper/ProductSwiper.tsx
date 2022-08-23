import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import Sketches from "../Sketches";
import type { ColoredDataSet, EditorTheme, Sketch } from "types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const OutputPane = ({
  loading,
  rawData,
  sketchId,
  sketchOptions,
  sketchRenewKey,
  theme,
  uuid,
}: {
  loading: boolean;
  rawData: ColoredDataSet;
  sketchId: string;
  sketchOptions: Sketch[];
  sketchRenewKey: number;
  theme: EditorTheme;
  uuid: string;
}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
      loop
      autoplay={{ disableOnInteraction: true, delay: 6000 }}
    >
      <SwiperSlide>
        <Sketches
          key={sketchRenewKey}
          loading={loading}
          rawData={rawData}
          sketchId={sketchId}
          sketchOptions={sketchOptions}
          theme={theme}
          uuid={uuid}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Sketches
          key={sketchRenewKey}
          loading={loading}
          rawData={rawData}
          sketchId={sketchId}
          sketchOptions={sketchOptions}
          theme={theme}
          uuid={uuid}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Sketches
          key={sketchRenewKey}
          loading={loading}
          rawData={rawData}
          sketchId={sketchId}
          sketchOptions={sketchOptions}
          theme={theme}
          uuid={uuid}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default OutputPane;
