import styled from 'styled-components'

export const OfferContainer = styled.section`
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
export const OfferTextFooter = styled.pre`
    padding: 15px 20px 0;
    font-size: 13px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--bs-gray-700);
    line-height: 18px;
    margin-bottom: 1rem;
    overflow: auto;
`


export const OfferActiveContainer = styled.div`

`
export const OfferActiveButton = styled.button`
    background-color: var(--bs-green);
    &:hover{
        background-color: var(--bs-green-hover);
    }
    
`
export const OfferContainerQuantity = styled.div`

`
export const OfferSharedContainer = styled.div`
    width: 40%;
`
export const OfferSharedSpan = styled.span`

`

export const OfferSharedButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #666;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    padding: 7px;
    margin-top: 6px;
    border-radius: 7px;
    &:hover{
        background-color: #666;
        color: #fff;
        cursor: pointer;
    }
`
export const OfferAlertContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--bs-red-alert) ;
    font-weight: 700;
    padding: 5px;
    background: var(--bs-white-100);
    margin-top: 10px;
    border-radius: 7px;
`
export const OfferAlertHeader = styled.span`
    text-align: center;
    line-height: 16px;
    font-size: 15px;
    margin: 5px;
    text-transform: uppercase;
`
export const OfferAlertBody = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 15px;
    svg{
        font-size: 21px;
    }
`