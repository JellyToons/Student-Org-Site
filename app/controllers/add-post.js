import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addPost() {
      //TODO: add post to database
      var title = this.get('title');
      var subtitle = this.get('subtitle');
      var image = this.get('image');
      var content = this.get('content2');
      var tags = this.get('tags');
      console.log(this);

      //Ember.$.post( "/api/posts", { title: title, subtitle: subtitle, image: image, content: content } );
      var po = this.store.createRecord('post', {
        title: title,
        subtitle: subtitle,
        image: image,
        content: content,
        //TODO: get the current date, the author name, and tags
        tags: tags,
      });
      po.save();

      alert(title + " / " + subtitle + " with the image at " + image + " and content " + content + " is saved.");


      this.set('title', '');
      this.set('subtitle', '');
      this.set('image', '');
      this.set('content2', '');
      this.set('tags', '');
      this.transitionToRoute('posts');
    }
  }

});
