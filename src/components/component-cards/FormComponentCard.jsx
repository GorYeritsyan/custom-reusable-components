import {useState} from "react";
import ComponentCard from "../ComponentCard.jsx";
import Form from "../form/Form.jsx";
import Button from "../button/Button.jsx";
import Field from "../form/Field.jsx";
import Input from "../form/input/Input.jsx";
import {validateFormData} from "../../utils/index.js";

const FormComponentCard = () => {
    const [errors, setErrors] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));
        const newErrors = validateFormData(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors(null);

        // Submit Form
        console.log("values", formData);
    }

    return (
        <ComponentCard title="Form">
            <Form onSubmit={handleSubmit}>
                <Field errors={errors} name="email" label="Email Address">
                    <Input />
                </Field>

                <Field errors={errors} name="password" label="Password">
                    <Input type="password" />
                </Field>

                <div className="self-end">
                    <Button>Submit</Button>
                </div>
            </Form>
        </ComponentCard>
    );
}

export default FormComponentCard;