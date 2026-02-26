'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeStore = {

  store: new JsonStore('./models/employee.json', { employees: [] }),
  collection: 'employees',


  getEmpInfo() {
    return this.store.findAll(this.collection);
  },

};

export default employeeStore;