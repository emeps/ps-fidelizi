import styled from 'styled-components'

export const OfferContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
` 

export const OfferImage = styled.img`  
    max-width: 320px;
    object-position: center;
    object-fit: cover;
    border-radius: 10px;
`

export const OfferContainerImage = styled.div`  
    min-width: 300px;
    border-radius: 10px;
    overflow: hidden;
    padding-left: 20px;
`

export const OfferContainerComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
`
