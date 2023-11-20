'use client';

import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import { Button } from '@/components';

const CountryCapitalGame: React.FC<{ data: { [key: string]: string } }> = ({
  data,
}) => {
  const [gameData, setGameData] = useState(data);
  const [currentSelected, setCurrentSelected] = useState<string[]>([]);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    if (currentSelected.length === 2) {
      // check if correct
      const key = currentSelected.find((item) => data[item]);
      if (!key) {
        // wrong
        setIsWrong(true);
      } else {
        // check other value
        const otherValue = currentSelected.filter((item) => item !== key);
        if (data[key] === otherValue[0]) {
          const temp = { ...gameData };
          delete temp[key];
          setGameData(temp);
          setCurrentSelected([]);
        } else {
          setIsWrong(true);
        }
      }
    }
  }, [currentSelected]);

  const btnsArray = useMemo(() => {
    const arr: string[] = [];
    Object.keys(gameData).forEach((key) => {
      arr.push(key);
      // @ts-expect-error weird error
      arr.push(data[key]);
    });
    return arr;
  }, [gameData]);

  return (
    <div>
      {Object.keys(gameData).length === 0 ? <div>Congratulations</div> : null}
      <div className='grid grid-cols-4 gap-3'>
        {btnsArray?.map((item) => (
          <Button
            className={classNames({
              'btn-primary': currentSelected?.includes(item) && !isWrong,
              'btn-error': currentSelected?.includes(item) && isWrong,
            })}
            key={item}
            onClick={() => {
              setCurrentSelected((prev) => {
                if (isWrong) {
                  setIsWrong(false);
                  return [item];
                }
                if (prev.length < 2) {
                  return [...prev, item];
                }
                return prev;
              });
            }}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CountryCapitalGame;
