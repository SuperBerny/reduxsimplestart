import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
   return (
      <div className="ui container comments">
         {/* a component can also be wriitten with a closing tag to add custom children */}
         <ApprovalCard>
            <CommentDetail 
               avatar={faker.image.avatar()} 
               author="Sam" 
               timeAgo="Today At 4:45PM" 
               content="Nice blog post!"
            />
         </ApprovalCard>
         <ApprovalCard>
            <CommentDetail 
               avatar={faker.image.avatar()} 
               author="Alex"
               timeAgo="Today At 2:00Am"
               content="I like the subject" 
            />
         </ApprovalCard>
         <ApprovalCard>
            <CommentDetail 
               avatar={faker.image.avatar()} 
               author="Jane"
               timeAgo="Yesterday At 5:00PM" 
               content="I like the writing"
            />
         </ApprovalCard>
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector('#root'));