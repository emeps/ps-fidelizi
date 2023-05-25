import {
  RulesContainer,
  RulesItem,
  RulesList,
  RulesTitle,
} from "./Rules.style";

export const Rules = () => {
  return (
    <RulesContainer>
      <RulesTitle>Regras da Oferta</RulesTitle>
      <RulesList>
        <RulesItem>
          Oferta exclusiva para clientes novos, não participantes do programa de
          fidelidade do estabelecimento 
          <strong> Demonstração FideliZi </strong>
        </RulesItem>
        <RulesItem>
          Oferta sujeita à alterações a partir da data de publicação
        </RulesItem>
        <RulesItem>
          O não comparecimento dentro do prazo estipulado implicará na perda da
          oferta
        </RulesItem>
        <RulesItem>
          A oferta estará válida na área de resgate do FideliZi por
          <strong> 15 dias </strong> a partir da ativação
        </RulesItem>
        <RulesItem>Não cumulativo com outras promoções ou ofertas</RulesItem>
        <RulesItem>
          O valor total da oferta deverá ser gasto em uma única visita (não
          haverá troco ou crédito)
        </RulesItem>
        <RulesItem>Oferta poderá ser ativada apenas uma vez por CPF</RulesItem>
        <RulesItem>Válido somente aos finais de semana</RulesItem>
      </RulesList>
    </RulesContainer>
  );
};
