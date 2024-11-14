interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <label className="inline-flex items-center space-x-2 mt-1 mx-2">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="text-gray-700">{label}</span>
        </label>
    );
}

export default Checkbox;