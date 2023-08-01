export default function Button({
	children,
	isAlternative = false,
}: {
	children: React.ReactNode;
	isAlternative?: boolean;
}) {
	return (
		<>
			<button
				className={`${
					isAlternative
						? "text-white bg-green  hover:bg-white hover:text-green"
						: "text-black bg-white  hover:bg-green hover:text-white"
				}  text-[22px] py-4 px-10 border-[2px] border-green  duration-300`}
			>
				{children}
			</button>
		</>
	);
}
