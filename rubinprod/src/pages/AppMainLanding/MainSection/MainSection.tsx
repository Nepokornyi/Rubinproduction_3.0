import { Button } from '../../../components/Button/Button'
import { Header } from '../../../components/Header/Header'
import { Text } from '../../../components/Text/Text'
import { FlexContainer } from '../../../components/layout/FlexContainer'

export const MainSection = () => {
    return (
        <FlexContainer minHeight="100vh" center direction="column">
            <Header />
            <Text variant="h1">
                Rubin <br />
                production
            </Text>
            <Text variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tristique arcu purus
            </Text>
            <Button>Click me</Button>
        </FlexContainer>
    )
}
