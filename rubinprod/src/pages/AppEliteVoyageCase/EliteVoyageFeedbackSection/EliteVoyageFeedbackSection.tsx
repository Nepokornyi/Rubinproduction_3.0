import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ParallaxContainer } from '../../AppMainLanding/AboutSection/components/Parallax/ParallaxContainer'

import author from '../../../assets/img/eliteVoyage/author.png'
import { Text } from '../../../components/Text/Text'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { BsLinkedin } from 'react-icons/bs'
import { Reveal } from '../../../components/animations/reveal/Reveal'

import quoteUp from '../../../assets/img/scooty/quoteUp.png'
import quoteDown from '../../../assets/img/scooty/quoteDown.png'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0 100px 0;
`

const ReviewContainer = styled(FlexContainer)`
    padding: 25px 25px 25px 40px;
`

const ReviewBlock = styled(FlexContainer)`
    max-width: 725px;
`

const Quote = styled(Text)`
    position: relative;
`

const QuoteUp = styled.img`
    position: absolute;
    top: -35px;
    left: -30px;
`

const QuoteDown = styled.img`
    position: absolute;
    bottom: -20px;
    right: -15px;
`

const TextRelative = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
`

const TextAbsolute = styled(Text)`
    position: absolute;
    bottom: -25px;
    left: 0;
    text-transform: ${(props) => props.$textTransform};
`

const StyledLink = styled.a`
    text-decoration: none;
    text-align: right;
    color: #fff;
`

export const EliteVoyageFeedbackSection = () => {
    const { t } = useTranslation()
    const isDesktopLayout = useBreakpointBiggerThan('xl')
    const direction = isDesktopLayout ? 'row' : 'column'

    return (
        <StyledFlexContainer direction="column" justifyContent="space-between">
            <ParallaxContainer
                variant="case"
                text="strategy, schooting, animation, instagram feed, branding and design"
            />
            <ReviewContainer direction={direction} center gap="100px">
                <Reveal removeRepeatedReveal={false}>
                    <img src={author} />
                </Reveal>
                <ReviewBlock direction="column" gap="50px">
                    <Quote variant="p">
                        <QuoteUp src={quoteUp} />
                        <Reveal x={20} removeRepeatedReveal={false}>
                            {t('eliteVoyageCase.feedback')}
                        </Reveal>
                        <QuoteDown src={quoteDown} />
                    </Quote>
                    <TextRelative variant="button" $textTransform="uppercase">
                        <Reveal x={-20} removeRepeatedReveal={false}>
                            <StyledLink href="https://www.linkedin.com/company/rubinproduction">
                                IGOR GLINKA <BsLinkedin />
                            </StyledLink>
                        </Reveal>
                        <TextAbsolute
                            $textTransform="uppercase"
                            variant={'socials'}
                        >
                            <Reveal x={20} removeRepeatedReveal={false}>
                                HEAD OF PRODUCTION
                            </Reveal>
                        </TextAbsolute>
                    </TextRelative>
                </ReviewBlock>
            </ReviewContainer>
            <ParallaxContainer
                variant="case"
                isTop={false}
                text="photo/video editing, creative treatment, project planning, assistance
"
            />
        </StyledFlexContainer>
    )
}
