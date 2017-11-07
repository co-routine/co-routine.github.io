export default class Hero {
  constructor() {
    this.$heroTitle = $('.c-hero__title');
    this.$heroLead = $('.c-hero__lead');

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
