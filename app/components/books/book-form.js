import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  action: undefined,
  
  isEdit(){
    return get(this, 'action') == 'edit';
  }
});
