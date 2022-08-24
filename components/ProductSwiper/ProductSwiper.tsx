import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { convertColorToRGB } from "utils";
import Box from "@mui/material/Box";
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
  const selectedSketch = sketchOptions[parseInt(sketchId)];

  return (
    <Box sx={{ transform: { sm: "scale(0.5)" } }}>
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
              data={rawData}
              uuid={uuid}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default OutputPane;
