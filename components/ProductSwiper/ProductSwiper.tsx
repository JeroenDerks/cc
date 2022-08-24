import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { convertColorToRGB } from "utils";

import type { ColoredDataSet, EditorTheme, Sketch } from "types";
import { useScalingFactor } from "utils/useScalingFactor";
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
  const scalingFactor = typeof window !== "undefined" ? useScalingFactor() : 1;
  const selectedSketch = sketchOptions[parseInt(sketchId)];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      navigation={{ nextEl: ".product-next", prevEl: ".product-prev" }}
      loop
      autoplay={{ disableOnInteraction: true, delay: 6000 }}
    >
      {selectedSketch.sketches.map((Sketch, i) => (
        <SwiperSlide>
          <Sketch
            bg={convertColorToRGB(theme.bg)}
            key={sketchRenewKey + i}
            loading={loading}
            scale={scalingFactor}
            data={rawData}
            uuid={uuid}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OutputPane;
