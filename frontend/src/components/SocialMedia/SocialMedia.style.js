import { styled } from "styled-components";

export const SocialMediaContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
`

export const SocialMediaIcon = styled.a`
    width: 40%;
    text-align: center;
    padding: 15px;
    font-size: 20px;
    height: 70px;
    margin: 5px;
    border-radius: 7px;
    color: #fff;
    background: ${props => props.bgColor};
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

