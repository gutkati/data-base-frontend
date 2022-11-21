import React, {useState} from 'react';

const useFormValidation = () => {
    const inputDefaultState = {
        link: "",
        description: "",
        date: "",
    }
    const [isInput, setIsInput] = useState(inputDefaultState)
    const {link, description, date} = isInput
    const isSubmitBtnActive = link.length > 0 && description.length > 0 && date.length > 0
    const handleInputs = (e) => {
        const {name, value} = e.target
        setIsInput((state) => ({...state, [name]: value}))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return {link, description, date, isSubmitBtnActive, handleInputs, handleFormSubmit}
};

export default useFormValidation;