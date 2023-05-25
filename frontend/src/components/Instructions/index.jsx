/* eslint-disable react/no-unescaped-entities */
import { InstructionsContainer, InstructionsContainerText, InstructionsRow, InstructionsSpanNumber, InstructionsSpanText, InstructionsSpanTitle } from "./Instructions.style"

export const Instructions = () => {

    return(
        <>
            <InstructionsContainer>

                <InstructionsRow>
                    <InstructionsSpanNumber>1</InstructionsSpanNumber>
                    <InstructionsContainerText>
                        <InstructionsSpanTitle> ATIVE A OFERTA </InstructionsSpanTitle>
                        <InstructionsSpanText> Clique em 'ativar oferta' e se identifique com o seu CPF. Dados pessoais podem ser solicitados</InstructionsSpanText>
                    </InstructionsContainerText>
                </InstructionsRow>

                <InstructionsRow>
                    <InstructionsSpanNumber>2</InstructionsSpanNumber>
                    <InstructionsContainerText>
                        <InstructionsSpanTitle> VISITE O ESTABELECIMENTO </InstructionsSpanTitle>
                        <InstructionsSpanText> Fique atento ao prazo de validade após a ativação para não perder a oferta.</InstructionsSpanText>
                    </InstructionsContainerText>
                </InstructionsRow>

                <InstructionsRow>
                    <InstructionsSpanNumber>3</InstructionsSpanNumber>
                    <InstructionsContainerText>
                        <InstructionsSpanTitle> RESGATE A OFERTA </InstructionsSpanTitle>
                        <InstructionsSpanText>Informe o seu CPF na área de resgate do Fidelizi e aproveite!</InstructionsSpanText>
                    </InstructionsContainerText>
                </InstructionsRow>
                
            </InstructionsContainer>
        </>
    )
}