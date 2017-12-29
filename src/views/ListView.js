import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

import ItemView from './ItemView'
import { Item } from '../models'
import { List } from '../collections'

export default Backbone.View.extend({

  el: $('#app'),

  template: _.template($('#tpl_list').html()),

  events: {
    'click #add': 'addItem'
  },

  initialize () {
    this.collection = new List()
    this.collection.on('add', this.appendItem)
    this.counter = 0

    this.render()
  },

  render () {
    this.$el.append(this.template())
    return this
  },

  addItem () {
    this.counter++

    const item = new Item()
    item.set({
      part2: `${item.get('part2')} ${this.counter}`
    })

    this.collection.add(item)
  },

  appendItem (item) {
    const itemView = new ItemView({
      model: item
    })
    $('ul', this.el).append(itemView.render().el)
  }

})
