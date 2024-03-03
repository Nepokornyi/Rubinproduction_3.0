import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'

import showreel from '../../../assets/img/showreel.jpg'

const StyledFlexContainer = styled(FlexContainer)`
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
`

const StyledShowReel = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`

export const ShowReelSection = () => {
    return (
        <StyledFlexContainer alignItems="center" justifyContent="center">
            <StyledShowReel src={showreel} />
        </StyledFlexContainer>
    )
}
