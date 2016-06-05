import React      from 'react';
import { mount }  from 'react-mounter';
import { App }    from './App';
import { Home }   from '/imports/ui/Home';

FlowRouter.route( '/', {
  name: 'Home',
  action() {
    mount( App, {
      content:  <Home />
    });
  }
});
