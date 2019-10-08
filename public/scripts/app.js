/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweet = [  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    console.log(createTweetElement(tweet));
    $('.html-tweets').prepend(createTweetElement(tweet));
  }
}


const createTweetElement = function(tweet) {
  const $tweet = `
  <section class=old-tweets>
  <section class=created-tweets>
  <article>
      <img class="avatar" src=${tweet.user.avatars}><a>${tweet.user.name}</a><a class="handle">${tweet.user.handle}</a>
  <header class="tweets">${tweet.content.text}</header>
  <footer>${tweet.created_at}</footer>
  </article>
</section>
</section>`;
  return $tweet;
};

$(document).ready(function() {
renderTweets(tweet);
});