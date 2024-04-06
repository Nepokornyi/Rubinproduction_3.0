import { Text } from '../../components/Text/Text'
import { motion } from 'framer-motion'

export const AppScootyLanding = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <Text>scooty</Text>
        </motion.div>
    )
}
