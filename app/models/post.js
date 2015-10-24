import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  image: DS.attr('string'),
  content: DS.attr('string'),
  datePublished: DS.attr('string'),
  author: DS.belongsTo('user', { async: true }),
  tags: DS.hasMany('tag', { async: true })
}).reopenClass({
  FIXTURES: [
  {
      id: 1,
      title: 'Snapper Rocks Surfing',
      subtitle: 'Surfing Away on Pennies a Day',
      content: '<p>Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you. After nor you leave might share court balls.</p>' +
          '<p>Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our.</p>' +
          '<p>An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as.</p>' +
          '<p>Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely mrs one yet outweigh. Of acceptance insipidity remarkably is invitation.</p>' +
          '<p>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an. Going eat set she books found met aware.</p>' +
          '<p>Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. New get described applauded incommode shameless out extremity but. Resembled at perpetual no believing is otherwise sportsman. Is do he dispatched cultivated travelling astonished. Melancholy am considered possession on collecting everything.</p>' +
          '<p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye.</p>' +
          '<p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p>' +
          '<p>Much evil soon high in hope do view. Out may few northward believing attempted. Yet timed being songs marry one defer men our. Although finished blessing do of. Consider speaking me prospect whatever if. Ten nearer rather hunted six parish indeed number. Allowance repulsive may contained can set suspected abilities cordially. Do part am he high rest that. So fruit to ready it being views match.</p>',
      image: 'http://lorempixel.com/1000/570/sports/5/',
      datePublished: new Date(Date.parse("2015-02-12T13:15:00Z")),
      author: 1,
      tags: [1, 2, 3]
    },
    {
      id: 2,
      title: 'The Best Sushi in St. Louis',
      subtitle: '',
      image: 'http://lorempixel.com/1000/570/food/8/',
      content: '<p>HTML-formatted article text</p>',
      datePublished: new Date(Date.parse("2015-02-07T16:21:00Z")),
      author: 2,
      tags: [1]
    },
  ]
});
