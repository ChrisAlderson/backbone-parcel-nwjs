import Backbone from 'backbone'

import { Item } from '../models'

export default Backbone.Collection.extend({

  model: Item

})
