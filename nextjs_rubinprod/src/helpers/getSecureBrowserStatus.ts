export const getSecureBrowserStatus = () => {
    const userAgent = navigator.userAgent
    const normalizedUserAgent = userAgent.toLowerCase()

    const isInWebView = (() => {
        // Android
        if (
            /; wv\)/.test(normalizedUserAgent) ||
            /version\/[\d.]+ chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(
                normalizedUserAgent
            )
        ) {
            return true
        }

        // iOS
        if (/ip(ad|hone|od)/.test(normalizedUserAgent)) {
            return (
                !/safari/.test(normalizedUserAgent) &&
                !/firefox/.test(normalizedUserAgent)
            )
        }

        return false
    })()

    const isLimitedBrowser = (() => {
        try {
            return (
                !window.indexedDB ||
                !window.localStorage ||
                !window.sessionStorage ||
                !window.history.pushState
            )
        } catch (error) {
            return true
        }
    })()

    const isUnsupportedBrowser = isInWebView || isLimitedBrowser

    return {
        isInWebView,
        isLimitedBrowser,
        isUnsupportedBrowser,
    }
}
