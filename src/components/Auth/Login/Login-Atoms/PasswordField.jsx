import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  id,
  label,
  value,
  onChange,
  showPassword,
  togglePassword,
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
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="w-full px-4 py-3 pr-12 text-gray-700 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute text-gray-400 transition-colors -translate-y-1/2 right-4 top-1/2 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
