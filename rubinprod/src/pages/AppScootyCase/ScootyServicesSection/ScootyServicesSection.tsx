import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { Box } from '../../../components/layout/Box'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { Text } from '../../../components/Text/Text'
import icoX from '../../../assets/img/scooty/icoX.svg'
import { Reveal } from '../../../components/animations/reveal/Reveal'
import { useTranslation } from 'react-i18next'

const StyledFlexContainer = styled(FlexContainer)<
    LayoutFlexContainerProps & { $isTabletLayout: boolean }
>`
    padding: ${(props) =>
        props.$isDesktopLayout ? '150px 0px 100px 0' : '75px 0px'};
    flex-direction: ${(props) => (props.$isTabletLayout ? 'row' : 'column')};
    align-items: ${(props) => !props.$isDesktopLayout && 'center'};
    gap: ${(props) => !props.$isTabletLayout && '100px'};
`

const CardContainer = styled(FlexContainer)<LayoutFlexContainerProps>`
    align-items: ${(props) => !props.$isDesktopLayout && 'center'};
    flex-direction: ${(props) => !props.$isDesktopLayout && 'column'};
    gap: ${(props) => !props.$isDesktopLayout && '100px'};
`

const Card = styled(Box)<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '300px' : '250px')};

    ul {
        list-style: none;
        li {
            margin-top: ${(props) => props.$isDesktopLayout && '10px'};
        }
    }
`

const TitleRelativeText = styled(Text)`
    position: relative;
    padding: ${(props) => props.$paddingOverride};
    text-transform: ${(props) => props.$textTransform};
`

const AbsoluteX = styled.img`
    position: absolute;
    bottom: -5px;
    left: -35px;
`

export const ScootyServicesSection = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isTabletLayout = useBreakpointBiggerThan('xxl')

    const upperCardJustifyContent = isTabletLayout ? 'end' : 'space-evenly'
    const bottomCardJustifyContent = isTabletLayout ? 'start' : 'space-evenly'

    return (
        <StyledFlexContainer
            $isTabletLayout={isTabletLayout}
            $isDesktopLayout={isDesktopLayout}
            gap="100px"
        >
            <CardContainer
                $isDesktopLayout={isDesktopLayout}
                justifyContent={upperCardJustifyContent}
                gap="50px"
            >
                <Reveal removeRepeatedReveal={false}>
                    <Card $isDesktopLayout={isDesktopLayout}>
                        <TitleRelativeText
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            Strategy
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>
                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.strategy1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.strategy2')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.strategy3')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>

                <Reveal removeRepeatedReveal={false}>
                    <Card $isDesktopLayout={isDesktopLayout}>
                        <TitleRelativeText
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            Conception
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>
                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.conception1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.conception2')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.conception3')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>
            </CardContainer>

            <CardContainer
                $isDesktopLayout={isDesktopLayout}
                justifyContent={bottomCardJustifyContent}
                gap="100px"
            >
                <Reveal removeRepeatedReveal={false}>
                    <Card $isDesktopLayout={isDesktopLayout}>
                        <TitleRelativeText
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            Production
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>
                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.production1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.production2')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.production3')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>
                <Reveal removeRepeatedReveal={false}>
                    <Card $isDesktopLayout={isDesktopLayout}>
                        <TitleRelativeText
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            Post-Production
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>
                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.postProd1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('scootyCase.services.postProd2')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>
            </CardContainer>
        </StyledFlexContainer>
    )
}
