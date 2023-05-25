import logo from '../../assets/img/logo_header.png'
import { HeaderContainer, HeaderLogo } from './Header.style'

export const Header = () =>{
    return(
        <>
            <HeaderContainer>
                <HeaderLogo src={logo} alt="FideliZi!" />
            </HeaderContainer>
        </>
    )
}