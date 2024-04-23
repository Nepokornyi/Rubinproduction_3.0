import { useState } from 'react'

export const useDialogState = () => {
    const [showDialog, setShowDialog] = useState(false)

    const handleOpenDialog = () => {
        setShowDialog(true)
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden'
        }
    }
    const handleCloseDialog = () => {
        setShowDialog(false)
        document.body.style.overflow = 'auto'
    }

    return {
        showDialog,
        handleOpenDialog,
        handleCloseDialog,
    }
}
