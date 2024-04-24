import { Overlay, OverlayProps } from './Overlay'
import icoMail from '../../assets/img/icoMail.svg'
import styled from 'styled-components'
import { Text } from '../Text/Text'
import { motion } from 'framer-motion'
import {
    containerVariants,
    linkVariants,
} from '../Header/Menu/config/configDropdown'
import { renderHamburger } from '../Header/Menu/HamburgerMenu'

type OverlayEmailProps = Omit<OverlayProps, 'children'> & {
    onClose: () => void
}

const AnimationBox = styled(motion.div)`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledText = styled(Text)`
    display: block;
    text-align: ${(props) => props.$textAlign};
    text-transform: ${(props) => props.$textTransform};
`

export const OverlayEmail = ({ open, onClose }: OverlayEmailProps) => {
    const button = renderHamburger({ open: open, toggleOpen: onClose })

    return (
        <Overlay open={open} button={button}>
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
            >
                <AnimationBox>
                    <motion.div variants={linkVariants}>
                        <img src={icoMail} alt="email icon" />
                    </motion.div>
                </AnimationBox>
                <AnimationBox>
                    <motion.div variants={linkVariants}>
                        <StyledText
                            variant="h3"
                            $textTransform="uppercase"
                            $textAlign="center"
                        >
                            Thanks you for your inquiry!
                        </StyledText>
                    </motion.div>
                </AnimationBox>
                <AnimationBox>
                    <motion.div variants={linkVariants}>
                        <StyledText variant={'nav'} $textAlign="center">
                            We have received your message. Our team will get
                            back to you shortly.
                        </StyledText>
                    </motion.div>
                </AnimationBox>
            </motion.div>
        </Overlay>
    )
}
