import ViewList from "../../../Components/ViewList";

export default function Toys() {
	function Cardbody(props: any) {
		return (
			<div>
				<h3>{props.name}</h3>
				<p>{props.ageGroup}</p>
				<p>{props.quantity}</p>
			</div>
		);
	}
	return <ViewList category="Toys" Cardbody={Cardbody} />;
}
