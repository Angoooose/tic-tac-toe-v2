export default interface ButtonGroupProps {
    buttons: ButtonValue[],
}

interface ButtonValue {
    label: string,
    selected: boolean,
    onClick: () => any,
}