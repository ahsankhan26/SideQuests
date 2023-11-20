import CountryCapitalGame from 'app/test/(Components)/CountryCapitalGame';

const Test = () => {
  return (
    <div>
      <CountryCapitalGame
        data={{
          Germany: 'Berlin',
          Azerbaijan: 'Baku',
          Pakistan: 'Islamabad',
          Japan: 'Tokyo',
        }}
      />
    </div>
  );
};

export default Test;
