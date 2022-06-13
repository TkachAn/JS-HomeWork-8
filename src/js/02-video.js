import { throttle } from 'lodash';
import Player from '@vimeo/player';

const LOCAL_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(({seconds}) => {
	localStorage.setItem(LOCAL_KEY, seconds);},1000));

player.setCurrentTime(localStorage.getItem(LOCAL_KEY));
//throttle(ffff,1000);