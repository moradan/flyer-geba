import Form from "react-bootstrap/Form";

export default function CampoResultado({ className }: {className: string}) {
	return (
		<Form.Control 
			type="text" 
			maxLength={1} 
			className="border-0 rounded-0 text-shadow text-center fs-3 font-tahoma"
		/>
	);
}
