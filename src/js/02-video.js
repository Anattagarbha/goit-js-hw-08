import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// select node

const iframe = document.querySelector('iframe');

// use vimeo library functions

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    console.error(error);
  });
