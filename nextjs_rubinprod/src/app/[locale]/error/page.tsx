import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { Header } from '@/components/Header/Header'

export default function ErrorPage() {
    return (
        <div className="animation-container">
            <FlexContainer minHeight="min-h-screen" center>
                <Header />
                <Text variant="h3">Nastala chyba</Text>
            </FlexContainer>
        </div>
    )
}
