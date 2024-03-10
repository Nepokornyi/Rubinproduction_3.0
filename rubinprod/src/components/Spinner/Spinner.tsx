import styled from 'styled-components'

const StyledSpinner = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #d91e37;
    border-radius: 50%;
    margin-left: 25px;
    animation: spin 0.85s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const Spinner = () => {
    return <StyledSpinner />
}
