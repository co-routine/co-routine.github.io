'use strict';

import Gnav from './_global-nav'
import Hero from './_hero'
import RbHero from './_rb-hero'

$(function() {
  if ($('[data-j-hamburger]').length) {
    new Gnav()
  }

  if ($('.c-hero__texts__inner').length) {
    new Hero()
  }

  if ($('.p-rb-hero__title').length && $('.p-rb-hero__lead').length) {
    new RbHero()
  }
})
