import Clock from "@/shared/icons/order/Clock";
import Face from "@/shared/icons/order/Face";
import House from "@/shared/icons/order/House";
import Wash from "@/shared/icons/order/Wash";
import List from "@/shared/icons/order/List";

export default function Order() {
	const data = [
		{
			icon: <List />,
			label: "Детальное соблюдение<br/> договора",
		},
		{
			icon: <Face />,
			label: "Отсутствие проблем<br/> с&nbsp;кадрами",
		},
		{
			icon: <Clock />,
			label: "Удобный график<br/> работы",
		},
		{
			icon: <Wash />,
			label: "Применение<br/> профессиональных<br/> моющих средств",
		},
		{
			icon: <House />,
			label:
				"Клининг помещений<br/> различной площади,<br/> степени загрязнённости",
		},
	];

	return (
		<>
			<div className="mt-32">
				<div className="page-container">
					<h2 className="h2">Заказывая клининг у нас, вы получите:</h2>
					<div className="mt-8 flex items-start flex-wrap justify-center gap-[5%]">
						{data.map(function (item, index) {
							return (
								<>
									<OrderItem key={index} icon={item.icon} label={item.label} />
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export function OrderItem({
	icon,
	label,
}: {
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<>
			<div className="mt-8 flex flex-col items-center justify-center w-[30%]">
				<div className="max-w-[100px] aspect-square react-svg">{icon}</div>
				<div
					className="mt-2.5 font-title font-semibold text-2xl text-center"
					dangerouslySetInnerHTML={{ __html: label }}
				/>
			</div>
		</>
	);
}
