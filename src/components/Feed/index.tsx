import React, { useEffect, useState } from 'react';
import { Tweets } from './styles';
import Tweet from '../Tweet';
import axios from 'axios';

interface Tweet {
  id: string;
  content: string;
  authorId: string;
  likes: any[];
  createdAt: string;
}

interface User {
  email: string;
  id: string;
  username: string;
}

interface Tweet2 {
  id: string,
  content: string,
  likes: number,
  name: string,
  createdAt: string
}

const Feed: React.FC = () => {
  const [myTweets, setMyTweets] = useState<Tweet2[]>([]);

  useEffect(() => {
      (async () => {
        const result = await axios.get<Tweet[]>('http://localhost:3000/tweets')

        const pei = await Promise.all(result.data.map(async (tweet) => {
          const { data: user } = await axios.get<User>(`http://localhost:3000/api/v1/users/${tweet.authorId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        
          const t: Tweet2 = {
            id: tweet.id,
            content: tweet.content,
            likes: tweet.likes.length,
            name: user.username,
            createdAt: tweet.createdAt
          }

          return  t
        }))

        setMyTweets(pei.reverse());
      })()

    // fetch(`http://localhost:3000/tweets`)
    //   .then((response) => response.json())
    //   .then((data) => setMyTweets(data));
  }, []);

  return (
    <Tweets>
      {myTweets.length > 0 &&
        myTweets.map((tweet) => (
          <Tweet
            id={tweet.id}
            key={tweet.id}
            name={tweet.name}
            user={tweet.name}
            text={tweet.content}
            likes={tweet.likes}
            retweets={0}
            date={tweet.createdAt}
            comments={0}
          />
        ))}
    </Tweets>
  );
};

export default Feed;
