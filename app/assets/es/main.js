'use strict';
'use strict';

import { Person, Student } from './models';

class App {
  constructor () {
    console.log('Constructor of the class');
  }

  init () {
    //const Handlebars = require('handlebars');

    const getData = Utils.getJSONByPromise('../projects.json');
    console.log(getData);


    console.log('Initialization of the class App');

    const ps1 = new Person('Philippe', 'De Pauw - Waterschoot');
    console.log(ps1.toString());

    const st1 = new Student('362453', 'philippe.depauw@arteveldehs.be', 'Philippe', 'De Pauw - Waterschoot');
    console.log(st1.toString());
  }

};

window.addEventListener('DOMContentLoaded', (ev) => {
  const app = new App();
  app.init();
});
