import Form from "react-bootstrap/Form";

export default function CampoResultado() {
	return (
		<Form.Control 
			type="text" 
			maxLength={1} 
			className="border-0 rounded-0 text-shadow text-center fs-3 font-tahoma"
		/>
	);
}
