'use client'

import clsx from 'clsx'
import { useState } from 'react'

const transitionBezier = `.4,.36,0,1` // use clsx

export function DialogContainer() {
  let [toggle, setToggle] = useState(false)

  return (
    <div
      className={clsx(
        'relative isolate h-[500px] w-[470px] p-8',
        `before:absolute before:inset-x-0 before:bottom-16 before:z-10 before:mx-auto before:h-[18px] before:w-[180px] before:scale-[1.8] before:transform-gpu before:bg-gradient-to-r before:from-[#AE48FF] before:via-[#6344F5] before:to-[#18CCFC] before:blur-lg before:transition-opacity before:ease-[cubic-bezier(${transitionBezier})]`,
        {
          'before:opacity-0 before:duration-200': toggle,
          'before:duration-1000': !toggle,
        }
      )}
    >
      <div className='absolute inset-0 [mask:linear-gradient(black,transparent)] after:absolute after:inset-2 after:rounded-t-[40px] after:bg-white after:shadow-lg after:ring-1 after:ring-[#333333]/[0.08]' />
      <div
        className={clsx(
          'relative z-10 flex h-full items-center rounded-2xl p-8',
          `before:absolute before:inset-0 before:rounded-2xl before:border-[1px] before:border-[#333333]/[0.08] before:bg-white before:transition-opacity before:duration-500 before:[box-sizing:padding-box] before:ease-[cubic-bezier(${transitionBezier})]`,
          `after:absolute after:inset-0 after:rounded-2xl after:border-[1px] after:border-[#333333]/[0.08] after:bg-white after:opacity-0 after:transition-opacity after:duration-500 after:[box-sizing:padding-box] after:[mask-image:linear-gradient(black,transparent)] after:ease-[cubic-bezier(${transitionBezier})]`,
          {
            'before:opacity-0 after:opacity-100': toggle,
          }
        )}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className='z-10 w-full rounded-[7px] bg-[#6344F5] py-1.5 text-[13px]/6 font-semibold text-white ring-4 ring-[#6344F5]/10'
        >
          Toggle
        </button>
      </div>
    </div>
  )
}
