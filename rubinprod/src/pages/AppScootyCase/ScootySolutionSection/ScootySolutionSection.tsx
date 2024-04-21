import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { Text } from '../../../components/Text/Text'
import { ArrowDown } from '../../../components/Arrow/variants'

import solution from '../../../assets/img/scooty/solution.png'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

const StyledText = styled(Text)`
    max-width: 700px;
`

const TextRelative = styled(Text)`
    position: relative;
    text-transform: ${(props) => props.$textTransform};
`

const TextAbsolute = styled(Text)`
    position: absolute;
    bottom: 0;
    right: 25px;
    padding: ${(props) => props.$paddingOverride};
    text-transform: ${(props) => props.$textTransform};
`

const StyledArrowDown = styled(ArrowDown)`
    right: -100px;
    bottom: 50px;
`

const StyledImage = styled.img`
    height: 100%;
    max-width: 1100px;
    object-fit: cover;
`

export const ScootySolutionSection = () => {
    return (
        <StyledFlexContainer direction="column" center gap="50px">
            <FlexContainer justifyContent="center" gap="100px">
                <TextRelative variant="h2" $textTransform="uppercase">
                    Landing
                    <TextAbsolute
                        $paddingOverride="0"
                        $textTransform="uppercase"
                        variant="p"
                    >
                        scooty.cz
                    </TextAbsolute>
                    <StyledArrowDown />
                </TextRelative>

                <StyledText variant="p">
                    We crafted a lead generation website, enhancing its
                    structure and enriching its design for improved UI/UX. Our
                    strategic approach resulted in a visually appealing and
                    highly functional platform, driving conversions and
                    facilitating lead acquisition for Scooty
                </StyledText>
            </FlexContainer>
            <StyledImage src={solution} />
        </StyledFlexContainer>
    )
}
