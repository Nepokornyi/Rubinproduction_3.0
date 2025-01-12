import Image from 'next/image'
import {
    containerVariants,
    linkVariants,
} from '../Header/components/MobileMenu/config/configDropdown'
import { Text } from '../Text/Text'
import { Overlay } from './Overlay'
import { motion } from 'framer-motion'
import icoMail from '@/assets/img/icoMail.svg'
import {
    LoginStatus,
    LoginTitleVariants,
} from '@/app/[locale]/login/LoginPage/LoginForm/const'

type OverlayLoginProps = {
    open: boolean
    onClose: () => void
    responseStatus: LoginStatus
    message: string
}
export const OverlayLogin = ({
    open,
    onClose,
    responseStatus,
    message,
}: OverlayLoginProps) => {
    const renderButton = (
        <div
            className="cursor-pointer h-2 flex justify-center flex-col"
            onClick={() => onClose()}
        >
            <div className="w-8 h-1 bg-white" />
        </div>
    )

    return (
        <Overlay open={open} button={renderButton} zIndex="z-50">
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
            >
                <motion.div className="overflow-hidden flex justify-center items-center">
                    <motion.div variants={linkVariants}>
                        <Image src={icoMail} alt="email icon" />
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden flex justify-center items-center">
                    <motion.div variants={linkVariants}>
                        <Text
                            variant="h3"
                            textTransform="uppercase"
                            textAlign="text-center"
                        >
                            {LoginTitleVariants[responseStatus]}
                        </Text>
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden flex justify-center items-center">
                    <motion.div variants={linkVariants}>
                        <Text
                            variant="p"
                            textAlign="text-center"
                            padding="px-6 py-2"
                        >
                            {message}
                        </Text>
                    </motion.div>
                </motion.div>
            </motion.div>
        </Overlay>
    )
}
