
import { Group, FormInputStyles, FormInputLabel } from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
            <FormInputStyles {...otherProps} />
			{label && (
				<FormInputLabel>
					{label}
				</FormInputLabel>
			)}
		</Group>
	)
}

export default FormInput

