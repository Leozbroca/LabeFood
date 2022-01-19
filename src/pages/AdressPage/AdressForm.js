import React, { useContext } from "react"
import { useNavigate } from "react-router"
import useForm from "../../hooks/useForm"
import { addAdress } from "../../services/user"
import { DivForm, StyledButton, StyledInput } from "./styles"
import GlobalStateContext from "../../globalContext/GlobalStateContext";

const AdressForm = () => {
    const { control, setControl } = useContext(GlobalStateContext)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { form, onChangeInput, clear } = useForm(
        {
            street: '',
            number: Number(''),
            neighbourhood: '',
            city: '',
            state: '',
            complement: ''
        })

    // Enviar form
    const onSubmitForm = (event) => {
        event.preventDefault()
        addAdress(form, clear, token, navigate, control, setControl)
    }

    return (
        <DivForm>
            <form onSubmit={onSubmitForm}>
                <StyledInput
                    name='street'
                    value={form.street}
                    type='text'
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label='Logradouro'
                    placeholder='Rua/Av'
                    variant='outlined'
                    required
                />

                <StyledInput
                    name='number'
                    value={form.number}
                    type='text'
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label='Número'
                    placeholder='Número'
                    variant='outlined'
                    required
                />

                <StyledInput
                    name='complement'
                    value={form.complement}
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label='Complemento'
                    placeholder='Apto./Bloco'
                    variant='outlined'
                />

                <StyledInput
                    name='neighbourhood'
                    value={form.neighbourhood}
                    type='text'
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label='Bairro'
                    placeholder='Bairro'
                    variant='outlined'
                    required
                />

                <StyledInput
                    name='city'
                    value={form.city}
                    type='text'
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label='Cidade'
                    placeholder='Cidade'
                    variant='outlined'
                    required
                />

                <StyledInput
                    name='state'
                    value={form.state}
                    type='text'
                    onChange={onChangeInput}
                    id="outlined-basic"
                    label='Estado'
                    placeholder='Estado'
                    variant='outlined'
                    required
                />

                <StyledButton color='secondary' variant="contained" type="submit">
                    <b>Salvar</b>
                </StyledButton>

            </form>
        </DivForm>
    )

}

export default AdressForm;