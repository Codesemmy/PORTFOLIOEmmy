import AnimatedText from "../animatedText/AnimatedText";

interface SkillsCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Responsive icon container */}
      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        {icon}
      </div>

      <AnimatedText
        text={name}
        className="text-sm sm:text-base md:text-lg font-medium"
        once
        duration={0}
        staggerValue={0.02}
      />
    </div>
  );
};

export default SkillsCard;
