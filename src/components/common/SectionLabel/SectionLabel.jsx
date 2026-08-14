import "./SectionLabel.css";

function SectionLabel({
    children,
    variant = "gold",
    className = "",
}) {
    const classes = [
        "section-label",
        `section-label--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={classes}>
            {children}
        </span>
    );
}

export default SectionLabel;