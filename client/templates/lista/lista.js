Template.lista.rendered = function(){
  setTimeout(function(){
    $('.tooltipped').tooltip({
    delay: 50
    });
  }, 1000);

}
Template.lista.helpers({
  tarefas:function() {
    return Tarefas.find()
  },
  isCheck: function() {
    if (this.status) {
      return 'check'
    }
    return ""
  }
})
Template.lista.events({
  'change input[type=checkbox]': function(e) {
    e.preventDefault();
    Tarefas.update(this._id, {
      $set: {
        status: e.currentTarget.checked
      }
    })
  },
  'click #removerTarefa': function(e) {
    e.preventDefault()
    Tarefas.remove(this._id)
  }
})
