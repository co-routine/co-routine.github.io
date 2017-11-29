/**
 * Rebuild Booster のメインビジュアルの表示の処理
 */
export default class RbHero {
  constructor () {
    this.$heroTitle = $('.p-rb-hero__title')
    this.$heroLead = $('.p-rb-hero__lead')
    this.$heroBtn = $('.p-rb-hero__btn')
    this.$herosymbol = $('.p-rb-hero__symbol')

    this.showSettings()
  }

  showSettings () {
    this.showContent(this.$herosymbol)
    this.showContent(this.$heroTitle)

    setTimeout(() => {
      this.showContent(this.$heroLead)

      setTimeout(() => {
        this.showContent(this.$heroBtn)
      }, 200)
    }, 60)
  }

  showContent ($target) {
    $target.addClass('is-show')
  }
}
