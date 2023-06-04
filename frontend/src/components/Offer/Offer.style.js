import styled from 'styled-components'

export const OfferContainer = styled.section`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding-left: 20px;
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
    font-family: 'Cera Round Pro', system-ui, Helvetica, Arial, sans-serif;

    
`
export const OfferShared = styled.span`
`

export const OfferActiveContainer = styled.div`
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    background-color: #8eb936;
    font-weight: 700;
    padding: 19px 105px 17px 17px;
    border-radius: 7px;
    color: var(--bs-white);
    &:hover{
        background-color: #025802;
        cursor: pointer;
    }
`
export const OfferActiveButton = styled.button`
    background-color: var(--bs-green);
    &:hover{
        background-color: var(--bs-green-hover);
    }
    
`
export const OfferAviableQuantity = styled.span`
    font-size: 18px;
`

export const OfferAviableQuantitySpan = styled.span`
    font-size: 11px;
    font-weight: 400;
`

export const OfferActive = styled.span`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
export const OfferAviable = styled.div`
    background-color: #025802;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    text-align: center;
    line-height: 10px;
    padding-right: 12px;
    padding-top: 3px;
    padding-left: 20px;
    height: 100%;
    margin-top: -2px;
    border-radius: 0 7px 7px 0;
    right: 0;
    top: 2px;
`
export const OfferContainerQuantity = styled.div`

`
export const OfferSharedContainer = styled.div`
    width: 100%;
`
export const OfferSharedSpan = styled.h4`
    font-size: 20px;
    text-align: center;
    width: 100%;
    color: #492b7c;
    margin-bottom: 0px;
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
    gap: 10px;
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
    gap: 8px;
    svg{
        width: 14px;
        font-size: 21px;
    }
`