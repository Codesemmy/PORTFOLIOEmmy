import AnimatedText from "../animatedText/AnimatedText";

interface SkillsCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-xl">{icon}</div>
      <AnimatedText
        text={name}
        className="text-base font-medium"
        once
        duration={0}
        staggerValue={0.02}
      />
    </div>
  );
};

export default SkillsCard;
