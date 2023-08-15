import { AppConfig } from 'src/config/AppConfig';

export default function Head() {
  return (
    <>
      <title>{AppConfig.title}</title>
      <meta content={AppConfig.title} property='og:title' />
      <meta content={AppConfig.description} property='og:description' />
      <meta content={AppConfig.description} name='description' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
    </>
  );
}
