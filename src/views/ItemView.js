import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

export default Backbone.View.extend({

  tagName: 'li',

  template: _.template($('#tpl_list_item').html()),

  events: {
    'click .swap': 'swap',
    'click .delete': 'remove'
  },

  initialize () {
    _.bindAll(this, 'render', 'unrender', 'swap', 'remove')

    this.model.on('change', this.render)
    this.model.on('remove', this.unrender)
  },

  render () {
    this.$el.html(this.template(this.model.attributes))
    return this
  },

  unrender () {
    this.$el.remove()
  },

  swap () {
    var swapped = {
      part1: this.model.get('part2'),
      part2: this.model.get('part1')
    }
    this.model.set(swapped)
  },

  remove () {
    this.model.destroy()
  }

})
