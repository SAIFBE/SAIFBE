import clsx from 'clsx';

export function Button({ className, variant = 'primary', isLoading = false, ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50',
        {
          'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',
          'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50': variant === 'secondary',
          'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
        },
        className,
      )}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Processing...' : props.children}
    </button>
  );
}
