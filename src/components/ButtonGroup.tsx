import '../styles/ButtonGroup.css';
import ButtonGroupProps from '../Types/ButtonGroupProps';

export default function ButtonGroup(props: ButtonGroupProps) {
    const { buttons, disabled } = props;

    return (
        <div className={`button-group ${disabled ? 'button-group-disabled' : ''}`}>
            {buttons.map((b, i) => {
                if (i === buttons.length - 1) {
                    return (
                        <div
                            className={`button-group-option ${b.selected ? 'button-group-option-selected' : ''}`}
                            onClick={!disabled ? b.onClick : () => null}
                            style={{ border: 'none' }}
                        >{b.label}</div>
                    );
                } else {
                    return (
                    <div
                        className={`button-group-option ${b.selected ? 'button-group-option-selected' : ''}`}
                        onClick={!disabled ? b.onClick : () => null}
                    >{b.label}</div>
                    );
                }
            })}
        </div>
    );
}