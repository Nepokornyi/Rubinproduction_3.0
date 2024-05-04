import styled from 'styled-components'
import { useBreakpointBiggerThan } from '../../../helpers/useCurrentBreakpoint'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { LayoutFlexContainerProps } from '../../../components/layout/types'
import { Box } from '../../../components/layout/Box'
import { Text } from '../../../components/Text/Text'

import icoX from '../../../assets/img/eliteVoyage/icoX.png'
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

const CardContainer = styled(FlexContainer)<
    LayoutFlexContainerProps & { flexGrow: number }
>`
    flex: ${(props) => props.flexGrow};
    align-items: ${(props) => !props.$isDesktopLayout && 'center'};
    flex-direction: ${(props) => !props.$isDesktopLayout && 'column'};
    gap: ${(props) => !props.$isDesktopLayout && '100px'};
`

const Card = styled(Box)<LayoutFlexContainerProps>`
    width: ${(props) => (props.$isDesktopLayout ? '335px' : '250px')};

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

export const EliteVoyageServicesSection = () => {
    const { t } = useTranslation()

    const isDesktopLayout = useBreakpointBiggerThan('md')
    const isTabletLayout = useBreakpointBiggerThan('xxl')

    const upperCardJustifyContent = isTabletLayout ? 'end' : 'center'
    const bottomCardJustifyContent = isTabletLayout ? 'start' : 'center'

    return (
        <StyledFlexContainer
            $isDesktopLayout={isDesktopLayout}
            $isTabletLayout={isTabletLayout}
            gap="100px"
        >
            <CardContainer
                $isDesktopLayout={isDesktopLayout}
                justifyContent={upperCardJustifyContent}
                flexGrow={2}
                gap="100px"
            >
                <Reveal removeRepeatedReveal={false}>
                    <Card $isDesktopLayout={isDesktopLayout}>
                        <TitleRelativeText
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            full-cycle production
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>

                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.production1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.production2')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.production3')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>

                <Reveal removeRepeatedReveal={false}>
                    <Card>
                        <TitleRelativeText
                            $paddingOverride="0"
                            variant="button"
                            $textTransform="uppercase"
                        >
                            brand identity
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>
                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.brand1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.brand2')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.brand3')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>
            </CardContainer>

            <CardContainer
                $isDesktopLayout={isDesktopLayout}
                justifyContent={bottomCardJustifyContent}
                flexGrow={1}
            >
                <Reveal removeRepeatedReveal={false}>
                    <Card>
                        <TitleRelativeText
                            $paddingOverride="0"
                            $textTransform="uppercase"
                            variant="button"
                        >
                            social media content
                            <AbsoluteX src={icoX} alt="" />
                        </TitleRelativeText>
                        <ul>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.social1')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.social2')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.social3')}
                                </Text>
                            </li>
                            <li>
                                <Text variant="p" $paddingOverride="0">
                                    {t('eliteVoyageCase.services.social4')}
                                </Text>
                            </li>
                        </ul>
                    </Card>
                </Reveal>
            </CardContainer>
        </StyledFlexContainer>
    )
}
