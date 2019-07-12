import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
   return (
      <div className="ui container comments">
         <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Sam" 
            timeAgo="Today At 4:45PM" 
            content="Nice blog post!"
         />
         <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Alex"
            timeAgo="Today At 2:00Am"
            content="I like the subject" 
         />
         <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Jane"
            timeAgo="Yesterday At 5:00PM" 
            content="I like the writing"
         />
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector('#root'));