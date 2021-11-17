import React from 'react';
import styled from 'styled-components';
import StyledConverterElem from './StyledConverterEl';

const StyledInput = styled(StyledConverterElem)`
    border: 2px solid tomato;
`;

const onChange = (e, setBg) => {
    const { value } = e.target;

    const regExp = /^(#\w[^_]{5})$/;
    if (value.length === 7 && !regExp.test(value)) {
        setBg(null);
    }

    if (regExp.test(value)) {
        const rgbArr = value.match(/\w{2}/g);
        const rgb = rgbArr.map((color) => parseInt(color, 16));
        const rgbStr = rgb.join(' ');

        console.log(rgbStr);
        setBg(rgbStr);
    }
};

export default function Input({ handler }) {
    return <StyledInput as='input' onChange={(e) => onChange(e, handler)} />;
}

// const Input = styled.input.attrs((props) => ({
//     onChange: (e) => onChange(e, props.handler),
// }))`
//     border: 2px solid royalblue;
//     padding: 10px;
//     font-size: 20px;
// `;

// export default Input;
