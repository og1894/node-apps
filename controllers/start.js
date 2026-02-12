'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";


const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    response.send('Welcome to Oliviers Playlist app!');   
  },
};

const info = appStore.getAppInfo();
logger.debug(info);

response.json(info); 

export default start;