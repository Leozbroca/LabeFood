import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import * as Styled from './styles';

const ActiveOrderCard = (props) => {
    return (
        <>
            {props.totalPrice > 0 ?
                <Styled.DivOrder>

                    <AccessTimeIcon style={{ fontSize: 50 }} />

                    <Styled.DivOrderInfo>
                        <p><b>Pedido em andamento</b></p>
                        <p>{props.restaurantName}</p>
                        <span>SubTotal: R$ {props.totalPrice}</span>
                    </Styled.DivOrderInfo>
                </Styled.DivOrder> : ''}
        </>
    )
}

export default ActiveOrderCard;