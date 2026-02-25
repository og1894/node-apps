'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeStore = {

  store: new JsonStore('./models/employee.json', { employee: {} }),
  collection: 'employee',


  getEmpInfo() {
    return this.store.findAll(this.collection);
  },

};

export default employeeStore;