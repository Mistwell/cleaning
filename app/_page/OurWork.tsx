import Image from "next/image";
import work1 from "@/public/img/work/1.jpg";
import work2 from "@/public/img/work/2.jpg";

export default function OurWork() {
	return (
		<>
			<div className="mt-32">
				<div className="page-container">
					<h2 className="h2">Осуществляем клининг с 2010 года</h2>
					<div className="mt-16 flex items-start justify-start gap-8 text-xl">
						<div className="w-1/2">
							Сфера наших услуг обширна: вы можете заказать уборку квартир,
							офисов, гостиничных комплексов, прилегающей территории,
							либо&nbsp;выбрать глубокий, ежедневный или&nbsp;разовый клининг
							помещений.
						</div>
						<div className="w-1/2">
							Наша клининговая компания своевременно выезжает на&nbsp;объекты
							различной сложности: от&nbsp;компактных квартир до&nbsp;крупных
							офисов; от&nbsp;загородных коттеджей до&nbsp;производственных
							площадок.
						</div>
					</div>
					<div className="mt-8 border-green border-[2px] rounded-[5px] py-8 px-28 font-title font-semibold text-3xl text-center">
						Базовый принцип нашей деятельности:{" "}
						<span className="text-green">
							ориентация на&nbsp;нужды и&nbsp;потребности заказчика
						</span>
						, какое бы&nbsp;помещение ни&nbsp;приходилось убирать.
					</div>
					<div className="flex items-stretch justify-start mt-8 gap-8">
						<div className="w-1/2 relative aspect-[605/350]">
							<Image
								alt="work"
								src={work1}
								fill
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div className="w-1/2 relative aspect-[605/350]">
							<Image
								alt="work"
								src={work2}
								fill
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
