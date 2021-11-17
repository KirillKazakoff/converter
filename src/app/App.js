/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Converter from './components/Converter';

const StyledApp = styled.div`
	background-color: rgb(
		${(props) => (props.bgColor ? props.bgColor : '139 0 0')}
	);
`;

export default function App() {
    const [bgColor, setBgColor] = useState('255 255 255');

    const onEndH = (color) => {
        setBgColor(color);
    };

    return (
        <StyledApp bgColor={bgColor}>
            <Converter endHandler={onEndH} output={bgColor} />
        </StyledApp>
    );
}
