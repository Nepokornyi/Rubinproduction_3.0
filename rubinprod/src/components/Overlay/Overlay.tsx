import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { FlexContainer } from '../layout/FlexContainer'
import { AnimatePresence, motion } from 'framer-motion'
import { menuVariants } from '../Header/Menu/config/configDropdown'
import { Box } from '../layout/Box'

export type OverlayProps = {
    children: React.ReactNode
    button?: React.ReactNode
    zIndex?: number
    open: boolean
}

const StyledOverlay = styled(Box)<{ zIndex: number }>`
    position: fixed;
    background-color: #0c0c0c;
    opacity: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: top;
    border: none;
    z-index: ${(props) => props.zIndex};
`

const ButtonContainer = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px;
    z-index: 1000;
`

export const Overlay = ({
    open,
    button,
    zIndex = 1000,
    children,
}: OverlayProps) => {
    const overlayRoot = document.getElementById('overlay-root')
    if (!overlayRoot) return null

    const overlayElement = (
        <>
            <AnimatePresence>
                {open && (
                    <>
                        <StyledOverlay
                            as={motion.div}
                            zIndex={zIndex}
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <FlexContainer
                                direction="column"
                                gap="25px"
                                center
                                minHeight="100vh"
                            >
                                {children}
                            </FlexContainer>
                            <ButtonContainer>{button}</ButtonContainer>
                        </StyledOverlay>
                    </>
                )}
            </AnimatePresence>
        </>
    )

    return ReactDOM.createPortal(overlayElement, overlayRoot)
}
