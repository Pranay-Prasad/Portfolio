import React from 'react'
import {SiLeetcode,SiCodechef,SiCodeforces,SiHackerrank} from 'react-icons/si'
const Codeprofile = () => {
  return (
    <div className='about__codeprofile'>
        <a href="https://leetcode.com/PranayPrasad/" target='_blank' rel="noreferrer"><SiLeetcode/></a>
        <a href="https://www.codechef.com/users/pranay_2604" target='_blank' rel="noreferrer"><SiCodechef/></a>
        <a href="https://codeforces.com/profile/Pranay2604" target='_blank' rel="noreferrer"><SiCodeforces/></a>
        <a href="https://www.hackerrank.com/pranayprasad42" target='_blank' rel="noreferrer"><SiHackerrank/></a>
    </div>
  )
}

export default Codeprofile