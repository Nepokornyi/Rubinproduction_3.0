import { CaseAboutSection } from '@/app/[locale]/components/CaseAboutSection/CaseAboutSection'
import {
    CaseAboutBottomProps,
    CaseAboutTopProps,
} from '@/app/[locale]/components/CaseAboutSection/types'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import logo from '@/assets/img/gamechanger/GameChangerLogo.svg'
import { useTranslations } from 'next-intl'

const topConfig: CaseAboutTopProps = {
    logo: logo,
    leftContent: 'Client',
    leftTitle: 'Game Changer',
    rightContent: 'Industry',
    rightTitle: 'Hangover Patches',
}

export const GameChangerAboutSection = () => {
    const t = useTranslations('GameChangerCase')

    const bottomConfig: CaseAboutBottomProps = {
        services: [
            { text: 'Social Media' },
            { text: 'Advertising' },
            { text: 'Motion Design' },
            { text: 'Product' },
            { text: 'Photography' },
        ],
        clientChallenge: [
            {
                title: 'Client',
                text: t.rich('client', {
                    strong: (children) => <strong>{children}</strong>,
                }),
            },
            {
                title: 'Challenge',
                text: t.rich('challenge', {
                    strong: (children) => <strong>{children}</strong>,
                }),
            },
        ],
        color: 'text-[#7055EC]',
    }

    return (
        <FlexContainer id="about" center>
            <CaseAboutSection
                topConfig={topConfig}
                bottomConfig={bottomConfig}
            />
        </FlexContainer>
    )
}
