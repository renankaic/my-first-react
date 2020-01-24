import validator from 'validator'

class FormValidator {

    constructor(validation) {

        this._validation = validation
        
    }

    validate(state) {

        const fieldValue = state[this._validation.field.toString()][0]
        const validationMethod = validator[this._validation.method]

        if (validationMethod(fieldValue, [], state)) {
            return false
        } else {
            return true
        }

    }

}

export default FormValidator