import styled from 'styled-components'

export const RulesContainer = styled.section`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: var(--bs-gray-700);
`

export const RulesTitle = styled.span`
    color: var(--bs-purple);
    font-size: 23px;
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

export const RulesList = styled.ul`
    padding-left: 2rem;
    margin-bottom: 1rem;    
`

export const RulesItem = styled.li`
    font-size: 14px;
    margin-bottom: 4px;
    line-height: 20px;
`

