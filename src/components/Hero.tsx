import { Typography } from 'src/components/Typography';

interface HeroProps {
  title: string;
  subtitle?: string;
}

export const Hero = ({ title, subtitle = '' }: HeroProps) => (
  <div className='mb-5'>
    <div className='my-5 text-4xl font-semibold text-primary-content'>
      {title}
    </div>
    <Typography className='text-accent' variant='subTitle2'>
      <p>{subtitle}</p>
    </Typography>
  </div>
);
