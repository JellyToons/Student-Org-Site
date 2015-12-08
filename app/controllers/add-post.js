import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  title: '',
  subtitle: '',
  image: '',
  content: '',
  tags2: null,
  tags: (function(){
    return this.store.peekAll('tag');
  }).property('tags'),
  actions: {
    addPost() {
      var title = this.get('title');
      var subtitle = this.get('subtitle');
      var image = this.get('image');
      var content = this.get('content2');
      var tags2 = this.get('tags2');
      console.log(tags2);

      //console.log("=======================");
      //console.log(author + " " + today);
      Ember.$.post( "/api/posts", { 
        title: title, 
        subtitle: subtitle, 
        image: image,
        content: content,
        tags: tags2,
      });
      /*var po = this.store.createRecord('post', {
        title: title,
        subtitle: subtitle,
        image: image,
        content: content,
        datePublished: today,
        author: author,
        //TODO: get "datePublished", "author" and tags
        tags: tags,
      });
      po.save();*/

      this.set('title', '');
      this.set('subtitle', '');
      this.set('image', '');
      this.set('content2', '');
      this.set('tags2', '');
      this.transitionToRoute('posts');
    }
  }

});
