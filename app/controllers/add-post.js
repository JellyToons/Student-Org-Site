import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  actions: {
    addPost() {
      var title = this.get('title');
      var subtitle = this.get('subtitle');
      var image = this.get('image');
      var content = this.get('content2');
      var author = "arch3r";
      var today = moment().format();
      var tags = this.get('tags');
      console.log(this);

      //console.log("=======================");
      //console.log(author + " " + today);
      //Ember.$.post( "/api/posts", { title: title, subtitle: subtitle, image: image, content: content } );
      var po = this.store.createRecord('post', {
        title: title,
        subtitle: subtitle,
        image: image,
        content: content,
        datePublished: today,
        author: author
        //TODO: get "datePublished", "author" and tags
        tags: tags,
      });
      po.save();

      this.set('title', '');
      this.set('subtitle', '');
      this.set('image', '');
      this.set('content2', '');
      this.set('tags', '');
      this.transitionToRoute('posts');
    }
  }

});
