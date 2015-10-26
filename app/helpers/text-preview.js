import Ember from 'ember';

export function textPreview(text, minCutoff, maxCutoff) {
  var preview, cutoff;
  // Strip HTML from the article
  preview = Ember.$(text).text();
  if (preview.length > maxCutoff) {
    // Cut off text near the end of a word
    cutoff = preview.lastIndexOf(' ', maxCutoff);
    if (cutoff < minCutoff) {
      cutoff = maxCutoff;
    }
    preview = preview.substr(0, cutoff) + '...';
  }
  return preview;
}

export default Ember.Handlebars.makeBoundHelper(textPreview);