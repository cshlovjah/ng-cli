import * as angular from 'angular';

import routes from './<%= component.name %>.routes';

import <%= component.name %>Component from './<%= component.name %>';
import { <%= component.Name %>Service } from './<%= component.name %>.service';

export default angular.module('<%= component.name %>', [])
    .config(routes)
    .component("<%= component.name %>", <%= component.name %>Component)
    .service('<%= component.name %>Service', <%= component.Name %>Service)
    .name;
