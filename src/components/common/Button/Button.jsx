import "./Button.css";

function Button({
    children,
    variant = "primary",
    icon: Icon,
    href,
    onClick,
    type = "button",
    className = "",
}) {
    const buttonContent = (
        <>
            <span className="button__text">{children}</span>

            {Icon && (
                <Icon
                    className="button__icon"
                    size={18}
                    strokeWidth={1.8}
                />
            )}
        </>
    );

    const classes = [
        "button",
        `button--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <a
                href={href}
                className={classes}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
        >
            {buttonContent}
        </button>
    );
}

export default Button;