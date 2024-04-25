import styled from 'styled-components'
import { FlexContainer } from '../../../../../components/layout/FlexContainer'
import { Text } from '../../../../../components/Text/Text'
import { Variants, motion } from 'framer-motion'
import { useBreakpointBiggerThan } from '../../../../../helpers/useCurrentBreakpoint'

const StyledPlaceholder = styled(FlexContainer)<{
    $isTabletLayout: boolean
}>`
    width: 100%;
    height: 100%;
    min-width: ${(props) => props.$isTabletLayout && '470px'};
    min-height: ${(props) => props.$isTabletLayout && '350px'};
    border: ${(props) => props.$isTabletLayout && '1px solid #6e6e6e'};
    background-color: #0d0d0d;
    padding: 50px;
`

const StyledText = styled(Text)`
    line-height: 1.35;
    text-transform: ${(props) => props.$textTransform};
    padding: ${(props) => props.$paddingOverride};
`

const LoadingAnimation = styled.div`
    position: relative;
    height: 35px;
    width: 100%;
    background-color: #000;
    border: 1px solid #6e6e6e;
    overflow: hidden;
    margin: 50px 0 0 0;
`

const LoadingBar = styled(motion.div)`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #6e6e6e;
`

const Dot = styled(motion.div)`
    position: absolute;
    top: 35px;
    right: 35px;
    height: 25px;
    width: 25px;
    background-color: #d91e37;
    border-radius: 50%;
`

const loadingVariants: Variants = {
    animate: {
        x: ['-100%', '-25%', '0%', '-50%', '-100%'],
        transition: {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
}

const dotVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
    hidden: {
        opacity: 0,
    },
}

export const Placeholder = () => {
    const isMobileLayout = useBreakpointBiggerThan('xs')
    const isTabletLayout = useBreakpointBiggerThan('sm')
    const alignItems = isMobileLayout ? 'center' : 'start'

    return (
        <StyledPlaceholder
            justifyContent={alignItems}
            $isTabletLayout={isTabletLayout}
            direction="column"
        >
            <Dot variants={dotVariants} initial="hidden" animate="visible" />
            <StyledText
                variant="h4"
                $paddingOverride="0"
                $textTransform="uppercase"
            >
                Your
            </StyledText>
            <StyledText
                variant="h4"
                $paddingOverride="0"
                $textTransform="uppercase"
            >
                Project
            </StyledText>
            <StyledText
                variant="h4"
                $paddingOverride="0"
                $textTransform="uppercase"
            >
                Is Rendering
            </StyledText>
            <LoadingAnimation>
                <LoadingBar variants={loadingVariants} animate="animate" />
            </LoadingAnimation>
        </StyledPlaceholder>
    )
}
