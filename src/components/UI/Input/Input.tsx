import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  HTMLInputTypeAttribute
} from "react";

interface IInput {
  id: string;
  name: string;
  onChange: ChangeEventHandler;
  onBlur: FocusEventHandler;
  type?: HTMLInputTypeAttribute;
  labelText?: string;
  error?: string;
  className?: string;
}

export default forwardRef<HTMLInputElement, IInput>(function Input(props, ref) {
  const {
    id,
    name,
    onChange,
    onBlur,
    type = "text",
    labelText,
    error,
    className
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      {labelText && (
        <label htmlFor={id} className="mb-2">
          {labelText}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        className="min-w-[250px] rounded-xl border border-light-400 px-3 py-2 text-lg outline-none focus:border-purple-400 focus:ring-purple-400 dark:border-gray-300 dark:bg-gray-500 dark:focus:border-purple-400 dark:focus:ring-purple-400 sm:min-w-[320px]"
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
});
