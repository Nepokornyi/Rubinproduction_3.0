import styled from 'styled-components'
import { Box } from '../../../../../components/layout/Box'
import { Text } from '../../../../../components/Text/Text'
import { Button } from '../../../../../components/Button/Button'

const CallToActionGridItem = styled(Box)`
    transform: translateY(calc(-35%));
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
`
const StyledButton = styled(Button)`
    margin-left: 0;
    width: 90%;
`

export const WorkGridCallToAction = () => {
    return (
        <CallToActionGridItem>
            <Text variant="p" paddingOverride="0">
                Regardless of the projects complexity, we will provide a cost
                estimate during the first consultation.
            </Text>
            <StyledButton>Work together</StyledButton>
        </CallToActionGridItem>
    )
}
