import Button from "@/shared/components/Button";

export default function ContactForm() {
	return (
		<>
			<div className="bg-yellow py-14 bg-opacity-50">
				<div className="page-container">
					<div className="w-full flex items-stretch justify-start gap-8">
						<div className="w-1/2">
							<div className="font-title">
								<div className="text-black font-semibold text-5xl">
									Закажите бесплатную консультацию
								</div>
								<div className="text-black text-3xl font-semibold mt-8">
									Оставьте заявку и&nbsp;мы свяжемся с&nbsp;вами
									для&nbsp;консультации.
								</div>
							</div>
						</div>
						<div className="w-1/2">
							<div>
								<input
									className="w-full text-xl bg-white px-8 py-3 focus:outline-yellow text-black"
									type="text"
									placeholder="Введите ваше имя"
								/>
							</div>
							<div className="mt-4">
								<input
									className="w-full text-xl bg-white px-8 py-3 focus:outline-yellow text-black"
									type="text"
									placeholder="Введите номер телефона"
								/>
							</div>
							<div className="mt-6">
								<Button isAlternative>Оставить заявку</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
