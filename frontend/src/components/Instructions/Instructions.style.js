import styled from 'styled-components';

export const InstructionsContainer = styled.section`
    display: flex;
    place-content: center;
    place-items: center;
    flex-direction: column;
    padding-left: 20px;
`
export const InstructionsRow = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    min-height: 108px;

`
export const InstructionsContainerText = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: flex-start;
    width: 300px;
    color: var(--bs-gray);
    padding-left: 20px;
`
export const InstructionsSpanNumber = styled.span`
    font-size: 72px;
    font-weight: 700;
    color: var(--bs-purple-bold);
`
export const InstructionsSpanTitle = styled.span`
    font-weight: 700;
    `
export const InstructionsSpanText = styled.span`
    font-size: 12px;
    padding-top: 2px;
    line-height: 18px;
`