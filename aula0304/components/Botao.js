import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native"

const Botao = ({label}) => {
    const Botao = styled.TouchableOpacity`
    background-color: #3366ff;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;`
    ;

    return(
        <Botao>
            <Text style={{color: 'white'}}>{label}</Text>
        </Botao>
    )
}

export default Botao