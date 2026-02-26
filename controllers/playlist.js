'use strict';

import logger from '../utils/logger.js';

const playlist = {
  createView(request, response) {
    const playlistId = request.params.id;
    logger.debug(`Playlist id = ${playlistId}`);
    
    const viewData = {
      title: 'Playlist'
    };
    response.render('playlist', viewData);
  },
};

export default playlist;