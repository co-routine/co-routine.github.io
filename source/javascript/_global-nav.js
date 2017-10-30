export default class Gnav {
  constructor() {
    this.state = false
    this.$body = $('body')
    this.$target = $('[data-j-hamburger]');
    this.overlayContent = $('.c-global-header__content');

    this.$target.on({
      'click': () => {
        this.handleState()
        this.scrollLock()
      }
    });
  }

  handleState() {
    if (this.state == false) {
      this.state = true
      this.overlayContent.addClass('is-show')

      setTimeout(() => {
        this.overlayContent.addClass('is-fade')
      }, 300)
    } else {
      this.state = false
      this.overlayContent.removeClass('is-show')

      setTimeout(() => {
        this.overlayContent.removeClass('is-fade')
      }, 300)
    }
  }

  scrollLock() {
    if (this.state == true) {
      const scrollpos = $(window).scrollTop();
      this.$body.addClass('is-fixed').css({ 'top': -scrollpos })
    } else {
      this.$body.removeClass('is-fixed').css({ 'top': 0 })
    }
  }
}
