import Typography from 'src/components/Typography';

interface IHero {
  title: string;
  subtitle?: string;
}

export const Hero: React.FC<IHero> = ({ title, subtitle = '' }) => (
  <>
    <div className='my-5 text-4xl font-semibold text-primary-content'>
      {title}
    </div>
    <Typography variant='subTitle2' className='text-accent'>
      <p>{subtitle}</p>
    </Typography>
  </>
);
