'use client';

import { useMemo, useState } from 'react';
import Highlight from 'react-highlight';
import { FiClipboard } from 'react-icons/fi';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { LayoutGroup, motion } from 'framer-motion';

import { MenuTitle, Radio } from 'app/flex/(Components)/Common';
import {
  alignItemsButtons,
  DIRECTION,
  directionButtons,
  gapButtons,
  IConfiguration,
  initialConfiguration,
  justifyContentButtons,
  widthButtons,
  wrapButtons,
} from 'app/flex/(Components)/constants';
import { prettifiedHtmlString } from 'app/flex/(Components)/utils';
import RangeInput from 'app/sort-visualise/(Components)/RangeInput';

import { Button } from '@/components';
import { copyToClipboard } from '@/utils';

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
      <div className='button-shadow gap-4 bg-white p-5 flex-column md:col-span-3'>
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
          titleClassName='bg-[#ff91e7] !text-sm'
          value={configuration.itemCount}
        />
        {/* Gap */}
        <div>
          <MenuTitle>Gap</MenuTitle>
          <div className='flex items-center gap-2'>
            {gapButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.gap === value}
                disabled={showCode}
                key={name}
                label={name}
                name={name}
                onChange={() => handleConfigurationChange({ gap: value })}
                value={value}
              />
            ))}
          </div>
        </div>

        {/* Width */}
        <div>
          <MenuTitle>Width</MenuTitle>
          <div className='flex items-center gap-2'>
            {widthButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.width === value}
                disabled={showCode}
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
                disabled={showCode}
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
                disabled={showCode}
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
          <div className='flex items-center gap-1'>
            <MenuTitle>Justify Content</MenuTitle>
            <div
              className='tooltip'
              data-tip='works when flex direction is row or row-reverse'
            >
              <HiQuestionMarkCircle className='text-slate-700' size={18} />
            </div>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            {justifyContentButtons.map(({ name, value }) => (
              <Radio
                checked={configuration.justifyContent === value}
                disabled={
                  showCode ||
                  configuration.direction === DIRECTION.COLUMN ||
                  configuration.direction === DIRECTION.COLUMN_REVERSE
                }
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
                disabled={showCode}
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
          className='button-shadow btn-accent rounded-none'
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
      <div className='button-shadow max-h-[43rem] overflow-scroll bg-white p-5 md:col-span-4 lg:col-span-5'>
        {!showCode ? (
          <motion.div
            className={`flex ${configuration.direction} ${configuration.wrap} ${configuration.justifyContent} ${configuration.alignItems} ${configuration.gap}`}
            id='flex'
            layout
          >
            <LayoutGroup>
              {items.map((item) => {
                return (
                  <motion.div
                    className={`flex h-32 min-w-fit items-center justify-center bg-fuchsia-700 text-2xl font-semibold hover:bg-fuchsia-800 ${configuration.width}`}
                    key={item}
                    layout
                  >
                    {item}
                  </motion.div>
                );
              })}
            </LayoutGroup>
          </motion.div>
        ) : (
          <div className='relative h-full'>
            <div
              className='tooltip-primary tooltip tooltip-left absolute right-2 top-2'
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
