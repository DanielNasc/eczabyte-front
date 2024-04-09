import React, { useEffect, useState } from 'react';
import { Tweets } from './styles';
import Tweet from '../Tweet';
import TweetService from '../../Services/tweetService';

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

  useEffect(() => {
    async function getTweets() {
      const tweets: any = await TweetService.getTweets();
      console.log(tweets);
      setMyTweets(tweets);
    }

    getTweets();

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
            user={tweet.author.username}
            text={tweet.content}
            likes={tweet.likes.length}
            retweets={0}
            date={tweet.date}
            comments={0}
          />
        ))}
    </Tweets>
  );
};

export default Feed;
