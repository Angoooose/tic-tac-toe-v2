export default interface ButtonGroupProps {
    buttons: ButtonValue[],
    disabled?: boolean,
}

interface ButtonValue {
    label: string,
    selected: boolean,
    onClick: () => any,
}