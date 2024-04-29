import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Text } from '../../../components/Text/Text'
import { ArrowDown } from '../../../components/Arrow/variants'

import solution from '../../../assets/img/scooty/solution.png'
import solutionMobile from '../../../assets/img/scooty/solutionMobile.png'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { Reveal } from '../../../components/animations/reveal/Reveal'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 25px 100px 25px;
`

const StyledText = styled(Text)<{ $isDesktopLayout: boolean }>`
    max-width: ${(props) => props.$isDesktopLayout && '700px'};
`

const TextRelative = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
`

const TextAbsolute = styled(Text)<{ $isDesktopLayout: boolean }>`
    position: absolute;
    bottom: ${(props) => (props.$isDesktopLayout ? '0px' : '-15px')};
    left: ${(props) => (props.$isDesktopLayout ? 'auto' : '25px')};
    right: ${(props) => (props.$isDesktopLayout ? '25px' : 'auto')};
    padding: ${(props) => props.$paddingOverride};
    text-transform: ${(props) => props.$textTransform};
`

const StyledImage = styled.img<{ $isTabletLayout: boolean }>`
    width: 100%;
    max-width: 1100px;
    max-height: ${(props) => !props.$isTabletLayout && '600px'};
    object-fit: contain;
`

export const ScootySolutionSection = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('xl')
    const isTabletLayout = useBreakpointBiggerThan('md')

    const renderArrow = isDesktopLayout ? (
        <Reveal
            style={{
                width: '80px',
                height: '22px',
                position: 'absolute',
                right: '-100px',
                bottom: '50px',
            }}
            y={-20}
            removeRepeatedReveal={false}
        >
            <ArrowDown />
        </Reveal>
    ) : null
    const direction = isDesktopLayout ? 'row' : 'column'
    const gap = isDesktopLayout ? '100px' : '50px'

    const imageSource = isTabletLayout ? solution : solutionMobile

    return (
        <StyledFlexContainer direction="column" center gap="50px">
            <FlexContainer
                justifyContent="center"
                direction={direction}
                gap={gap}
            >
                <TextRelative variant="h2" $textTransform="uppercase">
                    <Reveal y={-10} removeRepeatedReveal={false}>
                        Landing
                    </Reveal>
                    <TextAbsolute
                        $paddingOverride="0"
                        $textTransform="uppercase"
                        $isDesktopLayout={isDesktopLayout}
                        variant="p"
                    >
                        <Reveal y={10} removeRepeatedReveal={false}>
                            scooty.cz
                        </Reveal>
                    </TextAbsolute>

                    {renderArrow}
                </TextRelative>

                <StyledText $isDesktopLayout={isDesktopLayout} variant="p">
                    <Reveal x={20} removeRepeatedReveal={false}>
                        {t('scootyCase.solution')}
                    </Reveal>
                </StyledText>
            </FlexContainer>
            <Reveal y={20} removeRepeatedReveal={false}>
                <StyledImage
                    $isTabletLayout={isTabletLayout}
                    src={imageSource}
                />
            </Reveal>
        </StyledFlexContainer>
    )
}
