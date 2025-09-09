import { useState } from 'react'
import { IoShareOutline } from "react-icons/io5";

import React from 'react'
import { handleCopy } from './helper';

const ShareBtn = () => {
    const [copied, setCopied] = useState(false);
     const onShareClick = () => {
    if (handleCopy()) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // hide after 2 sec
    }
  };

  return (
    <div className='flex flex-col'>
           <button onClick={onShareClick}>
            <IoShareOutline />
          </button>
          {copied && <span className="text-xs mt-1">Link copied!</span>}
    </div>
  )
}

export default ShareBtn

