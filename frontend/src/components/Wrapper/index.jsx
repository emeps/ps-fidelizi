import { WrapperContainer } from "./Wrapper.style"


// eslint-disable-next-line react/prop-types
export const Wrapper = ({ children }) => {
    return (
        < WrapperContainer>
            {children}
        </WrapperContainer>
    )
}