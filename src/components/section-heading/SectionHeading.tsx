"use client";

interface SectionHeadingProps {
  sectionName: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ sectionName }) => {
  return (
    <div className="text-center mb-20">
      {/* Only the heading text */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
        {sectionName}
      </h2>
    </div>
  );
};

export default SectionHeading;
