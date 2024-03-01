interface TweetInterface {
  id: number;
  name: string;
  user: string;
  text: string;
  likes: number;
  date: string;
  retweets: number;
  comments: number;
}

export default TweetInterface;
