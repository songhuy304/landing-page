// Import only the modules we need to reduce bundle size
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";

// Lazy load additional modules only when needed

import React, { ReactNode, useId, useRef } from "react";

interface SliderProps {
  title?: string;
  icon?: ReactNode;
  children: React.ReactNode;
  swiperOptions?: SwiperOptions;
  showNavigation?: boolean;
  showPagination?: boolean;
  prevRef?: React.RefObject<HTMLButtonElement>;
  nextRef?: React.RefObject<HTMLButtonElement>;
}

const defaultSwiperOptions: SwiperOptions = {
  spaceBetween: 12,
  speed: 600,
  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    1024: { slidesPerView: 3, slidesPerGroup: 3 },
  },
};

export interface SliderItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const Carousel = ({
  children,
  swiperOptions,
  showPagination = false,
  prevRef,
  nextRef,
}: SliderProps) => {
  const paginationId = useId();
  const paginationElClass = `swiper-pagination-${paginationId.replace(
    /:/g,
    ""
  )}`;
  const internalPrevRef = useRef<HTMLButtonElement | null>(null);
  const internalNextRef = useRef<HTMLButtonElement | null>(null);

  const effectivePrevRef = prevRef || internalPrevRef;
  const effectiveNextRef = nextRef || internalNextRef;

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        watchOverflow={false}
        navigation={{
          prevEl: effectivePrevRef.current,
          nextEl: effectiveNextRef.current,
        }}
        pagination={{
          el: `.${paginationElClass}`,
          clickable: true,
        }}
        onInit={(swiper) => {
          // fix navigation on first render
          //@ts-ignore
          swiper.params.navigation.prevEl = effectivePrevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = effectiveNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        {...(swiperOptions ? swiperOptions : defaultSwiperOptions)}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide className="swiper-slide !h-auto py-2" key={index}>
            {child}
          </SwiperSlide>
        ))}
        {showPagination && (
          <div
            className={`${paginationElClass} mt-4 flex justify-center gap-2`}
          />
        )}
      </Swiper>
    </div>
  );
};

export { Carousel };
