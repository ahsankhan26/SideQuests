'use client';

import { useMemo, useState } from 'react';
import Highlight from 'react-highlight';
import { FiClipboard } from 'react-icons/fi';
import { MenuTitle, Radio } from 'app/flex/(Components)/Common';
import {
  alignItemsButtons,
  directionButtons,
  IConfiguration,
  initialConfiguration,
  justifyContentButtons,
  widthButtons,
  wrapButtons,
} from 'app/flex/(Components)/constants';
import { getFlexGap, prettifiedHtmlString } from 'app/flex/(Components)/utils';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';
import classNames from 'classnames';

import { Button } from '@/components';
import { copyToClipboard } from '@/utils/common';

const Flexbox: React.FC = () => {
  const [showCode, setShowCode] = useState(false);
  const [codeText, setCodeText] = useState('');

  const [configuration, setConfiguration] =
    useState<IConfiguration>(initialConfiguration);

  const items = useMemo(
    () => new Array(configuration.itemCount).fill(0).map((_, idx) => idx + 1),
    [configuration.itemCount],
  );

  const handleConfigurationChange = (val: Partial<IConfiguration>) => {
    const temp = { ...configuration };
    type ParamKeys = keyof typeof val;
    (Object.keys(val) as ParamKeys[]).forEach((key) => {
      const value = val[key];
      if (value !== undefined) {
        // @ts-expect-error type assertion
        temp[key] = value;
      }
    });
    setConfiguration(temp);
  };

  const toggleCode = () => {
    setShowCode(!showCode);
    if (!showCode) {
      const outerHtml = document?.querySelector('#flex')?.outerHTML;
      const code = prettifiedHtmlString(outerHtml ?? '');
      setCodeText(code);
    }
  };

  return (
    <div className='grid min-h-[36rem] w-full grid-cols-1 gap-5 rounded-md text-black md:grid-cols-7 lg:grid-cols-8'>
      {/* LEFT */}
      <div className='button-shadow flex flex-col gap-5 bg-stone-200 p-5 md:col-span-3'>
        {/* Count */}
        <RangeInput
          aria-label='Count'
          disabled={showCode}
          fullWidth
          onChange={(e) =>
            handleConfigurationChange({ itemCount: Number(e.target.value) })
          }
          range={[1, 15]}
          title='Count'
          titleClassName='bg-[#ff91e7]'
          value={configuration.itemCount}
        />
        {/* Gap */}
        <RangeInput
          aria-label='Gap'
          disabled={showCode}
          fullWidth
          max={'5'}
          min={'0'}
          onChange={(e) =>
            handleConfigurationChange({ gap: Number(e.target.value) })
          }
          title='Gap'
          titleClassName='bg-[#91a8ed]'
          value={configuration.gap}
          values={[0, 1, 2, 3, 4, 5]}
        />
        {/* Width */}
        <div>
          <MenuTitle>Width</MenuTitle>
          <div className='flex items-center gap-2'>
            {widthButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.width === value}
                key={name}
                label={name}
                name={name}
                onChange={() => handleConfigurationChange({ width: value })}
                value={value}
              />
            ))}
          </div>
        </div>

        {/* Wrap */}
        <div>
          <MenuTitle>Wrap</MenuTitle>
          <div className='flex flex-wrap items-center gap-2'>
            {wrapButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.wrap === value}
                key={name}
                label={name}
                onChange={() => handleConfigurationChange({ wrap: value })}
                value={value}
              />
            ))}
          </div>
        </div>

        {/* Flex Direction */}
        <div>
          <MenuTitle>Flex Direction</MenuTitle>
          <div className='flex flex-wrap items-center gap-2'>
            {directionButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.direction === value}
                key={name}
                label={name}
                onChange={() => handleConfigurationChange({ direction: value })}
                value={value}
              />
            ))}
          </div>
        </div>

        {/* Justify Content */}
        <div>
          <MenuTitle>Justify Content</MenuTitle>
          <div className='flex flex-wrap items-center gap-2'>
            {justifyContentButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.justifyContent === value}
                key={name}
                label={name}
                onChange={() =>
                  handleConfigurationChange({ justifyContent: value })
                }
                value={value}
              />
            ))}
          </div>
        </div>

        {/* Align Items */}
        <div>
          <MenuTitle>Align Items</MenuTitle>
          <div className='flex flex-wrap items-center gap-2'>
            {alignItemsButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.alignItems === value}
                key={name}
                label={name}
                name={`items_${name}`}
                onChange={() =>
                  handleConfigurationChange({ alignItems: value })
                }
                value={value}
              />
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <Button
          className='button-shadow btn-accent btn-outline rounded-none'
          disabled={showCode}
          onClick={() => setConfiguration(initialConfiguration)}
        >
          Reset
        </Button>

        {/* Generate Button */}
        <label className='button-shadow swap btn-primary btn rounded-none'>
          <input onClick={toggleCode} type='checkbox' />
          <div className='swap-off'>Generate Code</div>
          <div className='swap-on'>Preview</div>
        </label>
      </div>
      {/* RIGHT */}
      <div className='button-shadow bg-stone-200 p-5 md:col-span-4 lg:col-span-5'>
        {!showCode ? (
          <div
            className={classNames(
              `flex transition-all duration-500 ease-in-out ${configuration.direction} ${configuration.wrap} ${configuration.justifyContent} ${configuration.alignItems}`,
              getFlexGap(configuration.gap),
            )}
            id='flex'
          >
            {items.map((item) => {
              return (
                <div
                  className={classNames(
                    `flex h-32 animate-fade items-center justify-center bg-fuchsia-700 text-2xl font-semibold transition-all duration-500 ease-in-out animate-once hover:bg-fuchsia-800 ${configuration.width}`,
                  )}
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div className='relative h-full animate-fade animate-once'>
            <div
              className='tooltip-primary tooltip absolute right-2 top-2'
              data-tip='Copy to clipboard'
            >
              <Button
                className='btn-primary btn-sm'
                onClick={() => copyToClipboard(codeText)}
              >
                <FiClipboard />
              </Button>
            </div>
            <Highlight className='grid-code html h-full'>{codeText}</Highlight>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flexbox;