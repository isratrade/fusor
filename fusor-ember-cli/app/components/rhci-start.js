import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['rhci-start-block'],

  setIsDisabledCfmeAndOpenshift: Ember.observer('isRhev', 'isOpenStack', function() {
    if (this.get('isRhev') || this.get('isOpenStack')) {
      this.set('isDisabledOpenShift', false);
      return this.set('isDisabledCfme', false);
    } else {
      this.set('isOpenShift', false);
      this.set('isCloudForms', false);
      this.set('isDisabledOpenShift', true);
      return this.set('isDisabledCfme', true);
    }
  }),

  // tagline names
  taglineRhev: "for Traditional Workloads",
  taglineOpenStack: "for Cloud Workloads",
  taglineCloudForms: "for Hybrid Cloud Management",
  taglineOpenShift: "for Private Platform as a Service",

  // desc
  descRhev: 'Complete enterprise virtualization management for servers and desktops on the same infrastructure',
  descOpenStack: 'Flexible, secure foundations to build a massively scalable private or public cloud',
  descCloudForms: 'Manage your virtual, private, and hybrid cloud infrasctructures',
  descOpenShift: 'Develop, host, and scale applications in a cloud environment',

});
