import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = "center",
  dark = false,
}) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[alignment];

  return (
    <div
      className={`mb-12 ${alignmentClass} ${
        dark ? "text-white" : "text-nature-dark"
      }`}
    >
      {subtitle && (
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-oraleo-600 mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-5xl">{title}</h2>
    </div>
  );
};

export default SectionHeader;
