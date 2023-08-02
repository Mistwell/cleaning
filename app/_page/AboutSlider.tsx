"use client";

import Star from "@/shared/icons/Star";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

export default function AboutSlider() {
	const data = [
		{
			avatar: "/img/about/1.jpg",
			content:
				"Отлично выполненная работа! Заказывали уборку коттеджа и прилегающей территории, выполнили работу за 5 часов.",
		},
		{
			avatar: "/img/about/2.jpg",
			content:
				"После ремонта в квартире был просто хаос. Специалисты из Эксперта чистоты оперативно выехали на уборку после моего звонка и в считанные часы превратили  мой дом в уютное гнездышко.",
		},
		{
			avatar: "/img/about/3.jpg",
			content:
				"Необходимость делать уборку самой отпала с тех пор, как я начала пользоваться услугами данной компании. Поддерживающей уборки вполне хватает, чтобы держать дом в чистоте. и Раз в месяц-два можно заказывать генеральную уборку.",
		},
		{
			avatar: "/img/about/1.jpg",
			content:
				"Отлично выполненная работа! Заказывали уборку коттеджа и прилегающей территории, выполнили работу за 5 часов.",
		},
		{
			avatar: "/img/about/2.jpg",
			content:
				"После ремонта в квартире был просто хаос. Специалисты из Эксперта чистоты оперативно выехали на уборку после моего звонка и в считанные часы превратили  мой дом в уютное гнездышко.",
		},
		{
			avatar: "/img/about/3.jpg",
			content:
				"Необходимость делать уборку самой отпала с тех пор, как я начала пользоваться услугами данной компании. Поддерживающей уборки вполне хватает, чтобы держать дом в чистоте. и Раз в месяц-два можно заказывать генеральную уборку.",
		},
	];

	return (
		<>
			<div className="relative">
				<button className="swiper-button swiper-button-next" />
				<button className="swiper-button swiper-button-prev" />
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					loop={true}
					modules={[Navigation]}
					className="mySwiper"
				>
					{data.map(function (item, index) {
						return (
							<SwiperSlide key={index}>
								<SliderItem
									avatar={item.avatar}
									content={<>{item.content}</>}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
}

export function SliderItem({
	avatar,
	content,
}: {
	avatar: string;
	content: React.ReactNode;
}) {
	return (
		<>
			<div className="min-h-[286px] h-full border-2 border-green p-8 rounded-[5px]">
				<div className="flex items-center justify-start">
					<div className="w-[68px] aspect-square overflow-hidden rounded-full relative mr-5">
						<Image
							alt="avatar"
							src={avatar}
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="flex items-center justify-start">
						<div className="mr-1">
							<Star />
						</div>
						<div className="mr-1">
							<Star />
						</div>
						<div className="mr-1">
							<Star />
						</div>
						<div className="mr-1">
							<Star />
						</div>
						<div>
							<Star />
						</div>
					</div>
				</div>
				<div className="mt-8 text-xl">{content}</div>
			</div>
		</>
	);
}
