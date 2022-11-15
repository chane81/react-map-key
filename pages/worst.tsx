import type { NextPage } from 'next';
import { useState } from 'react';

const MapWorstCase: NextPage = () => {
  const [list, setList] = useState([
    { name: '당근' },
    { name: '사과' },
    { name: '바나나' }
  ]);

  const handleAdd = () => {
    setList((prev) => [{ name: '수박' }, ...prev]);
  };

  const handleRemove = () => {
    setList(list.filter((v) => v.name != '당근'));
  };

  return (
    <div className='container bg-white shadow-lg mx-auto my-4 p-4 flex flex-col gap-3 border border-slate-300 rounded-lg text-slate-600'>
      <div className='text-slate-600 border-b pb-3 border-b-slate-300 mb-4 font-medium text-3xl'>
        Map Key Index - Worst Case
      </div>
      <div className='flex gap-2 font-semibold text-md'>
        <input
          type='button'
          value='Add'
          className='cursor-pointer flex items-center rounded-md py-1 px-2 text-rose-400 bg-rose-100'
          onClick={handleAdd}
        />
        <input
          type='button'
          value='Remove'
          className='cursor-pointer flex items-center rounded-md py-1 px-2 text-sky-400 bg-sky-100'
          onClick={handleRemove}
        />
      </div>

      <div className='font-medium text-lg text-gray-500'>
        {list.map((v, idx) => (
          <div key={idx} className='my-2 columns-3'>
            <div className='w-32'>{v.name}</div>
            <div>index: {idx}</div>
            <input
              type='text'
              placeholder='아무거나 입력해'
              className='border w-full outline-2 outline-blue-400 rounded-lg border-slate-300 text-sm p-2 hover:border-slate-400'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapWorstCase;
