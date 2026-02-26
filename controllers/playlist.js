'use strict';

import logger from '../utils/logger.js';

const playlist = {
  createView(request, response) {
    const viewData = {
      title: 'Playlist'
    };
    response.render('playlist', viewData);
  },
};

export default playlist;