import { createGlobalStyle } from 'styled-components';
import CeraRoundProBlackRegular from '../assets/font/CeraRoundProRegular.woff'
import CeraRoundProBold from '../assets/font/CeraRoundProBold.woff'
import CeraRoundProLightregular from '../assets/font/CeraRoundProLightregular.woff'
import CeraRoundProMediumRegular from '../assets/font/CeraRoundProMediumRegular.woff'
import CeraRoundProRegular from '../assets/font/CeraRoundProRegular.woff'
import CeraRoundProThinRegular from '../assets/font/CeraRoundProThinRegular.woff'

export const FontStyle = createGlobalStyle `
    @font-face {
        font-family: 'CeraRoundProBlackRegular' ;
        src: url(${CeraRoundProBlackRegular});
    }
    @font-face {
        font-family: 'CeraRoundProBold' ;
        src: url(${CeraRoundProBold});
    }
    @font-face {
        font-family: 'CeraRoundProLightregular' ;
        src: url(${CeraRoundProLightregular});
    }
    @font-face {
        font-family: 'CeraRoundProMediumRegular' ;
        src: url(${CeraRoundProMediumRegular});
    }
    @font-face {
        font-family: 'CeraRoundProRegular' ;
        src: url(${CeraRoundProRegular});
    }
    @font-face {
        font-family: 'CeraRoundProThinRegular' ;
        src: url(${CeraRoundProThinRegular});
    }

`