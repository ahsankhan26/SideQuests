import { FaCheck, FaX } from 'react-icons/fa6';

interface ScoreIconProps {
  score: boolean;
  selectedOption: string;
  option: string;
}

const ScoreIcon = ({ score, selectedOption, option }: ScoreIconProps) => {
  if (selectedOption !== option) return null;

  if (score) {
    return (
      <FaCheck
        className='absolute -top-2 -right-2 rounded-full border border-success bg-green-900 p-1 text-white'
        size={24}
      />
    );
  }
  return (
    <FaX
      className='absolute -top-2 -right-2 rounded-full border border-error bg-red-900 p-1 text-white'
      size={24}
    />
  );
};
export default ScoreIcon;
