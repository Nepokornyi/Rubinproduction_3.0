export type Direction = 'row' | 'column'
export type HorizontalAlign =
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'none'
export type VerticalAlign = 'start' | 'center' | 'end' | 'none'


export type LayoutFlexContainerProps = {
    $isDesktopLayout?: boolean
}