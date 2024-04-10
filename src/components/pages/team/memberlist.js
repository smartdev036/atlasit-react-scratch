import React from 'react';
import Member1 from './member1';
import Member2 from './member2';

function MemberList() {
  return ( 
    <div className='memberlist'>
      <div className='app-container'>
        <Member1 />
        <Member2 />
      </div>
    </div>
   );
}

export default MemberList;