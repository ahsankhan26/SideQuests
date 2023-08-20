import { ChangeEvent } from 'react';
import htmlFormatter from 'pretty';

interface ISelectInput {
  items: number[];
  onChange: (e: ChangeEvent<HTMLSelectElement>, item: number) => void;
  name: string;
  disabled?: boolean;
}

export const SelectInput: React.FC<ISelectInput> = ({
  name,
  items,
  disabled,
  onChange,
}) => (
  <>
    {items.map((item) => (
      <div className='flex-center gap-2 text-xs font-semibold' key={item}>
        <p>{item}</p>
        <select
          className='select-bordered select w-full bg-white'
          disabled={disabled}
          onChange={(e) => onChange(e, item)}
        >
          <option value='auto'>Auto</option>
          <option value={1}>{`${name} 1`}</option>
          <option value={2}>{`${name} 2`}</option>
          <option value={3}>{`${name} 3`}</option>
          <option value={4}>{`${name} 4`}</option>
          <option value={5}>{`${name} 5`}</option>
          <option value={6}>{`${name} 6`}</option>
          <option value={7}>{`${name} 7`}</option>
          <option value={8}>{`${name} 8`}</option>
          <option value={9}>{`${name} 9`}</option>
          <option value={10}>{`${name} 10`}</option>
          <option value={11}>{`${name} 11`}</option>
          <option value={12}>{`${name} 12`}</option>
          {name.toLowerCase() === 'span' ? (
            <option value={'full'}>{`${name} Full`}</option>
          ) : null}
        </select>
      </div>
    ))}
  </>
);

export const prettifiedHtmlString = (html: string) => {
  // remove redundant classes
  let filtered = html.replaceAll('animate-fade', '');
  filtered = filtered.replaceAll('animate-once', '');
  filtered = filtered.replaceAll('hover:bg-fuchsia-800', '');
  filtered = filtered.replaceAll('id="grid"', '');
  filtered = filtered.replaceAll('font-semibold', '');
  filtered = filtered.replaceAll('col-start-auto', '');
  filtered = filtered.replaceAll('col-span-auto', '');
  filtered = filtered.replaceAll('col-end-auto', '');
  filtered = filtered.replace(/\s{2,}/g, ' '); // remove double whitespace caused by removing classes
  return htmlFormatter(filtered);
};
