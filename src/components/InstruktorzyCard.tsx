import { ArrowRightIcon } from "lucide-react";
import userImage from "../assets/user.jpg";

const TEACHERS = [
	{ name: "Anna Zajdel", instrument: "ŚPIEW", image: userImage },
	{ name: "Michał Nowak", instrument: "GITARA", image: userImage },
	{ name: "Katarzyna Bernat", instrument: "PIANINO", image: userImage },
	{ name: "Paweł Wojciechowski", instrument: "SKRZYPCE", image: userImage },
];

export default function InstruktorzyCard({ id }: { id: number }) {
	const teacher = TEACHERS[id - 1] ?? TEACHERS[0];

	return (
		<article className="w-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-goldDark/50 transition-transform duration-150 hover:-translate-y-1">
			<div
				className="h-52 w-full bg-cover bg-center"
				style={{ backgroundImage: `url(${teacher.image})` }}
			/>
			<div className="px-6 pb-5 pt-4">
				<h3 className="text-lg font-semibold text-textColor">{teacher.name}</h3>
				<p className="mt-1 text-sm font-medium tracking-wide text-goldDark">{teacher.instrument}</p>
				<a href="#kontakt" className="mt-4 inline-flex items-center text-textColor/80 transition-colors duration-500 hover:text-goldDark">
					Czytaj więcej
					<ArrowRightIcon className="ml-2 h-[1em] w-[1em] translate-y-px text-current" />
				</a>
			</div>
		</article>
	);
}
