import React from 'react'
import { useNavigate } from 'react-router';
import { MainHeader, DivEspacamento } from './styled';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

const Header = ({ title, goTo }) => {
    const navigate = useNavigate()
    return (
        <MainHeader>
            {title === 'Future Eats' || title === 'Meu carrinho' || title === 'Meu perfil' ? <DivEspacamento /> : <NavigateBeforeRoundedIcon fontSize={'large'} onClick={() => goTo(navigate)} />}
            <h4><b>{title}</b></h4>
            <DivEspacamento />
        </MainHeader>
    )
}

export default Header;