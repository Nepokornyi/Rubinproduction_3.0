import scootyCase from '@/assets/img/portfolio/scootyCase.png'
import gameChangerCase from '@/assets/img/portfolio/gameChangerCase.png'
import eliteVoyageCase from '@/assets/img/portfolio/eliteVoyageCase.png'
import { Button } from '@/components/Button/Button'
import { Box } from '@/components/Box/Box'
import { YourProjectPlaceholder } from './YourProjectPlaceholder'
import { Text } from '@/components/Text/Text'
import {
    BottomGridItem,
    DesktopGridLayout,
    ExpandedLeftGridItem,
    RightGridItem,
} from './GridElements'

export const WorkSectionGrid = () => {
    return (
        <DesktopGridLayout>
            <ExpandedLeftGridItem link={scootyCase} alt="scooty case" />
            <RightGridItem link={gameChangerCase} alt="game changer case" />
            <RightGridItem link={eliteVoyageCase} alt="elite voyage case" />
            <BottomGridItem>
                <YourProjectPlaceholder />
            </BottomGridItem>
            <BottomGridItem>
                <Box className="flex h-full flex-col justify-end items-start z-10">
                    <Text>
                        Bez ohledu na složitost projektu vám během první
                        konzultace poskytneme odhad ceny. Pojďme společně
                        vytvořit něco skvělého!
                    </Text>
                    <Button>Work together</Button>
                </Box>
            </BottomGridItem>
        </DesktopGridLayout>
    )
}
