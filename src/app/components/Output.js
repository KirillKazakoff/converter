import React from 'react';
import styled from 'styled-components';
import StyledConverterElem from './StyledConverterEl';

const StyledOutput = styled(StyledConverterElem)`
    text-align: center;
`;

export default function Output({ rgb }) {
    const printRgb = rgb
        ? `rgb ${rgb.split(' ').join(', ')}`
        : 'Error';

    return <StyledOutput>{printRgb}</StyledOutput>;
}
