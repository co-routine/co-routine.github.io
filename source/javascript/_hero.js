export default class Hero {
  constructor() {
    this.$heroTitle = $('[data-j-hero-title]');
    this.$heroLead = $('[data-j-hero-lead]');

    $(window).on({
      'load': () => {
        setTimeout(() => {
          this.showTexts();
        }, 100);
      }
    })
  };

  showTexts() {
    this.$heroTitle.addClass('is-show');

    setTimeout(() => {
      this.$heroLead.addClass('is-show');
    }, 70);
  }
};
