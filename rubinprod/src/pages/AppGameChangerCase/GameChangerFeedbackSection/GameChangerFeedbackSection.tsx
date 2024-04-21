import styled from 'styled-components'
import { FlexContainer } from '../../../components/layout/FlexContainer'
import { ParallaxContainer } from '../../AppMainLanding/AboutSection/components/Parallax/ParallaxContainer'

import author from '../../../assets/img/scooty/scootyAuthor.png'
import { Text } from '../../../components/Text/Text'
import { BsLinkedin } from 'react-icons/bs'

const StyledFlexContainer = styled(FlexContainer)`
    padding: 150px 0px 100px 0;
`

const ReviewBlock = styled(FlexContainer)`
    max-width: 550px;
`

const TextRelative = styled(Text)`
    position: relative;
`

const TextAbsolute = styled(Text)`
    position: absolute;
    bottom: -25px;
    left: 0;
`

export const GameChangerFeedbackSection = () => {
    return (
        <StyledFlexContainer direction="column" justifyContent="space-between">
            <ParallaxContainer
                variant="case"
                text="strategy, schooting, animation, instagram feed, branding and design"
            />
            <FlexContainer center gap={'100px'}>
                <img src={author} />
                <ReviewBlock direction="column" gap={'50px'}>
                    <Text variant="p">
                        We crafted a lead generation website, enhancing its
                        structure and enriching its design for improved UI/UX.
                        Our strategic approach resulted in a visually appealing
                        and highly functional platform, driving conversions and
                        facilitating lead acquisition for Scooty.
                    </Text>
                    <TextRelative variant="button" $textTransform="uppercase">
                        Nikita Rubin <BsLinkedin />
                        <TextAbsolute
                            $textTransform="uppercase"
                            variant={'socials'}
                        >
                            Founder of Rubin Production
                        </TextAbsolute>
                    </TextRelative>
                </ReviewBlock>
            </FlexContainer>
            <ParallaxContainer
                variant="case"
                isTop={false}
                text="photo/video editing, creative treatment, project planning, assistance
"
            />
        </StyledFlexContainer>
    )
}
