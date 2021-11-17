import React from 'react';
import styled from 'styled-components';

import Output from './Output';
import Input from './Input';

const StyledConverter = styled.div`
    width: 50%;
    padding: 10px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export default function Converter({ endHandler, output }) {
    return (
        <StyledConverter>
            <Output rgb={output} />
            <Input handler={endHandler} />
        </StyledConverter>
    );
}
