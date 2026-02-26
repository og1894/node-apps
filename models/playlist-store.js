'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const playlistStore = {

  store: new JsonStore('./models/playlist.json', { playlistCollection: [] }),
  collection: 'playlistCollection',
  array: 'songs',

  getAllPlaylists() {
    return this.store.findAll(this.collection);
  },

};

export default playlistStore;