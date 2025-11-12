export default function InputField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  disabled,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700 font-mont"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-gray-700 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
    </div>
  );
}
