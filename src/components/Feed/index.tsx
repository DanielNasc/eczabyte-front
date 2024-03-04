import React, { useContext, useEffect, useState } from 'react';
import { Tweets } from './styles';
import Tweet from '../Tweet';
import { AuthContext } from '../../contexts/AuthContext';

interface Tweet {
  id: number;
  name: string;
  user: string;
  text: string;
  likes: number;
  retweets: number;
  date: string;
  comments: number;
}

const Feed: React.FC = () => {
  const [myTweets, setMyTweets] = useState<Tweet[]>([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user.length > 0) {
      fetch(`http://localhost:3000/tweets`)
        .then((response) => response.json())
        .then((data) => setMyTweets(data));
    }
  }, [user]);

  return (
    <Tweets>
      {
        myTweets.length > 0 && myTweets.map((tweet) => (
          <Tweet
            id={tweet.id}
            key={tweet.id}
            name={tweet.name}
            user={tweet.user}
            text={tweet.text}
            likes={tweet.likes}
            retweets={tweet.retweets}
            date={tweet.date}
            comments={tweet.comments}
          />
        ))
      }
    </Tweets>
  );
};

export default Feed;
