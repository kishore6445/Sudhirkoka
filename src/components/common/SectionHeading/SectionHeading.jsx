import "./SectionHeading.css";

function SectionHeading({
    children,
    as: Tag = "h2",
    variant = "dark",
    align = "left",
    className = "",
}) {
    const classes = [
        "section-heading",
        `section-heading--${variant}`,
        `section-heading--${align}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Tag className={classes}>
            {children}
        </Tag>
    );
}

export default SectionHeading;