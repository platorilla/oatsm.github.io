interface BadgeProps {
    label: string;
    value: string;
    labelWidth?: string;
    valueWidth?: string;
}

const Badge = ({ label, value, labelWidth = "auto", valueWidth = "auto" }: BadgeProps) =>
    <div className="inline-flex items-center">
        <span className={`px-2 py-0.5 -mr-px rounded-l-full text-sm font-medium bg-gray-100 text-gray-800 min-h-[20px] flex items-center justify-start`} style={{ width: labelWidth }}>
            {label || '\u00A0'}
        </span>
        <span className="px-2 py-0.5 rounded-r-full text-sm font-medium bg-blue-100 text-blue-800 min-w-[20px] min-h-[20px] flex items-center justify-start" style={{ width: valueWidth }}>
            {value || '\u00A0'}
        </span>
    </div>

export default Badge;