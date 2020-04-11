import React from 'react';
import styled from "styled-components";
import CoinHeaderGrid from './CoinHeaderGrid';

export const CoinHeaderGridStyled = styled.div`
    displayed: grid;
    grid-template-columns:1fr 1fr;
`;

export const CoinSymbol = styled.div`
    justify-self: right;
`;

export default function ({name, symbol}){
    return <CoinHeaderGridStyled>
        <div> {name}</div>
    <CoinSymbol> {symbol} </CoinSymbol>
    </CoinHeaderGridStyled>
}