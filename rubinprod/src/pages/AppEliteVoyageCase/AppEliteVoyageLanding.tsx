import { motion } from 'framer-motion'
import { Text } from '../../components/Text/Text'

export const AppEliteVoyageLanding = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <Text>EliteVoyage</Text>
        </motion.div>
    )
}