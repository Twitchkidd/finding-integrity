import { Counter } from './Counter';

export { Page };

function Page() {
	return (
		<>
			<h1>Finding Integrity</h1>
			This page is:
			<ul>
				<li>Under construction.</li>
				<li>
					Interactive. <Counter />
				</li>
			</ul>
		</>
	);
}
