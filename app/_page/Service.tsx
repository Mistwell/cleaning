import ArrowRight from "@/shared/icons/ArrowRight";
import Link from "next/link";

export default function Service() {
	const data = [
		{
			url: "/",
			label: "Уборка нежилых<br/> помещений",
			price: "от 25 руб. за м<sup>2</sup>",
		},
		{
			url: "/",
			label: "Уборка жилых<br/> помещений",
			price: "от 60 руб. за м<sup>2</sup>",
		},
		{
			url: "/",
			label: "Мойка окон<br/> и фасадов",
			price: "от 40 руб. за м<sup>2</sup>",
		},
		{
			url: "/",
			label: "Уборка<br/> территории",
			price: "от 10 руб. за м<sup>2</sup>",
		},
		{
			url: "/",
			label: "Химчистка ковров<br/> и мягкой мебели",
			price: "от 100 руб. за м<sup>2</sup>",
		},
		{
			url: "/",
			label: "Уборка после пожара<br/> или ремонта",
			price: "от 200 руб. за м<sup>2</sup>",
		},
	];

	return (
		<>
			<div className="mt-32">
				<div className="page-container">
					<h2 className="h2">Выберите необходимую услугу</h2>
					<div className="mt-12 grid grid-cols-3 gap-8">
						{data.map(function (item, index) {
							return (
								<>
									<ServiceItem
										key={index}
										href={item.url}
										label={item.label}
										price={item.price}
									/>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export function ServiceItem({
	href,
	label,
	price,
}: {
	href: string;
	label: string;
	price: string;
}) {
	return (
		<>
			<Link
				href={href}
				className="border-green border-[2px] group hover:bg-white hover:scale-110 duration-300 w-full min-h-[227px] bg-green flex items-center justify-center relative"
			>
				<div className="">
					<div
						className="group-hover:text-black text-center font-bold text-xl text-white"
						dangerouslySetInnerHTML={{ __html: label }}
					/>
					<div
						className="group-hover:text-green text-center mt-2 font-bold text-xl text-yellow"
						dangerouslySetInnerHTML={{ __html: price }}
					/>
					<div className="overflow-hidden h-[0] group-hover:h-[25px] opacity-0 group-hover:opacity-100 duration-300 mt-4 mx-auto flex items-center justify-start border-b-[1px] border-black border-opacity-70 max-w-[138px] px-2">
						<div className="mr-2">Подробнее</div>
						<ArrowRight />
					</div>
				</div>
			</Link>
		</>
	);
}
