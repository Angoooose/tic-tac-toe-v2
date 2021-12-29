import '../styles/ButtonGroup.css';

interface ButtonGroupProps {
    buttons: ButtonValue[],
}

interface ButtonValue {
    label: string,
    selected: boolean,
    onClick: () => any,
}

export default function ButtonGroup(props: ButtonGroupProps) {
    const { buttons } = props;

    return (
        <div className="button-group">
            {buttons.map((b, i) => {
                if (i === buttons.length - 1) {
                    return <div className={`button-group-option ${b.selected ? 'button-group-option-selected' : ''}`} onClick={b.onClick} style={{ border: 'none' }}>{b.label}</div>;
                } else {
                    return <div className={`button-group-option ${b.selected ? 'button-group-option-selected' : ''}`} onClick={b.onClick}>{b.label}</div>;
                }
            })}
        </div>
    );
}