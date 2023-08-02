import ArrowRight from "@/shared/icons/ArrowRight";
import Image from "next/image";

export default function Deals() {
	const data = [
		{
			img: "/img/deals/1.jpg",
			label: "Именинникам скидка",
			content: "here content",
		},
		{
			img: "/img/deals/2.jpg",
			label: "Новоселам - скидка!",
			content: "here content",
		},
		{
			img: "/img/deals/3.jpg",
			label: "Приведи друга - получи скидку",
			content: "here content",
		},
	];

	return (
		<>
			<div className="mt-32">
				<h2 className="h2">Наши акции</h2>
				<div className="w-full bg-yellow bg-opacity-50 py-16 mt-16">
					<div className="page-container">
						<div className=" grid grid-cols-3 gap-8">
							{data.map(function (item, index) {
								return (
									<>
										<DealsItem key={index} img={item.img} label={item.label} />
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export function DealsItem({ img, label }: { img: string; label: string }) {
	return (
		<>
			<div className="w-full block cursor-pointer group relative bg-white rounded-[5px] overflow-hidden">
				<div className="overflow-hidden h-[244px] w-full relative">
					<Image
						alt="deal"
						src={img}
						fill
						style={{ objectFit: "cover" }}
						className="group-hover:scale-125 duration-500"
					/>
				</div>
				<div className="pt-8 pb-16 px-4 ">
					<div className="font-title text-3xl font-semibold">{label}</div>
					<div className="absolute left-4 bottom-4 mt-2 flex items-center justify-start border-b-[1px] border-black border-opacity-70 max-w-[180px] px-2">
						<div className="mr-2 text-lg">Узнать больше</div>
						<div className="group-hover:translate-x-[7px] duration-300">
							<ArrowRight />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
