/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const tweet = []

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $('.html-tweets').prepend(createTweetElement(tweet));
  }
}


const createTweetElement = function(tweet) {
  const $tweet = `
  <section class=old-tweets>
  <section class=created-tweets>
  <article>
  <img class="avatar" src=${escape(tweet.user.avatars)}><a>${escape(tweet.user.name)}</a><a class="handle">${escape(tweet.user.handle)}</a>
  <header class="tweets">${escape(tweet.content.text)}</header>
  <footer>${escape(tweet.created_at)}</footer>
  </article>
  </section>
  </section>`;
  return $tweet;
};


$(function() {
  const $button = $('.formTweet');
  $button.on('submit', function (event) {
    $('.errors').slideUp();
    let $input = $('#tweetText').serialize()
    let $value = $input.split("=")[1]
    event.preventDefault()
    if ($value.length > 140) {
      $('.errors').text('The text is too long')
      $('.errors').slideDown()
    } else if (!$value) {
      $('.errors').text('Write something please')
      $('.errors').slideDown()
    } else {
    $.ajax('/tweets', { 
      method: 'POST', 
      data: $input,
      success: function() {
        
        loadTweets()
      }
    })
  }
  });
});

const loadTweets = function () {
  $.ajax('/tweets', { method: 'GET', 
    success: function(data) {
      $(".html-tweets").empty()
      renderTweets(data)
    }
  })
};


$(document).ready(function() {
  loadTweets()
  toggle()
  $(".new-tweet").hide()
});




const safeHTML = escape(`<script>${''}</script>`)

const toggle = function () {
  $(".arrow-down").on("click", function ( ) {
    $(".new-tweet").slideToggle()
  })
}