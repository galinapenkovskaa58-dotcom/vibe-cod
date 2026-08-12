import './Button.css';

export default function Button({
  children,
  href = '#pricing',
  className = '',
  ariaLabel,
  onClick,
  type = 'button',
}) {
  const classes = `btn ${className}`.trim();

  if (href && !onClick) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
