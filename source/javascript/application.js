'use strict';

import Gnav from './_global-nav';
import Hero from './_hero';

if ($('[data-j-hamburger]').length) {
  new Gnav();
}

if ($('.c-hero__texts__inner').length) {
  new Hero();
}
