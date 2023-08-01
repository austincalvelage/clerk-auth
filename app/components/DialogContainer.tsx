'use client'

import clsx from 'clsx'
import { useState } from 'react'

export function DialogContainer() {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className={clsx(
        'relative h-[500px] w-[469px] rounded-[40px] p-6 shadow-lg ring-1 ring-[#333333]/[0.08]',
        'before:absolute before:inset-x-0 before:bottom-16 before:z-10 before:mx-auto before:h-[18px] before:w-[180px] before:scale-[1.8] before:bg-gradient-to-r before:from-[#AE48FF] before:via-[#6344F5] before:to-[#18CCFC] before:blur-lg',
        'after:absolute after:inset-0 after:-left-1.5 after:h-[525px] after:w-[480px] after:rounded-[40px] after:bg-white after:[mask:linear-gradient(transparent,black)]'
      )}
    >
      <div
        className={clsx(
          'relative z-20 flex h-full items-center rounded-2xl bg-white p-8 ring-1 ring-[#333333]/[0.08]',
          'after:pointer-events-none after:absolute after:inset-0 after:-left-1.5 after:h-[525px] after:w-[431px] after:rounded-[40px] after:bg-white after:opacity-0 after:transition-opacity after:duration-500 after:ease-[cubic-bezier(.4,.36,0,1)] after:[mask:linear-gradient(transparent,black)]',
          {
            'after:opacity-100': toggle,
          }
        )}
      >
        <button
          onClick={() => setToggle((prev) => !prev)}
          className='z-10 w-full rounded-[7px] bg-[#6344F5] py-1.5 text-[13px]/6 font-semibold text-white ring-4 ring-[#6344F5]/10'
        >
          Toggle
        </button>
      </div>
    </div>
  )
}
