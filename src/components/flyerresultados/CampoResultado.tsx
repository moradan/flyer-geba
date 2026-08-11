import Form from "react-bootstrap/Form";

export default function CampoResultado({ className }: {className: string}) {
	return (
		<Form.Control 
			type="text" 
			maxLength={1} 
			className="border-0 border-bottom rounded-0 bg-light text-center"
		/>
	);
}
