import FlickitySet from './classes/FlickitySet'
import MobileMenu from "./classes/MobileMenu"
import ToggleBlock from "./classes/ToggleBlock"
import SvgLoad from "./classes/SvgLoad"
import MovingPlaceholder from "./classes/MovingPlaceholder"
import Utils from "./classes/Utils"
import HiddenCaptcha from "./classes/HiddenCaptcha"
import autosize from "autosize"
import { Fancybox } from "@fancyapps/ui";

document.addEventListener("DOMContentLoaded", function (e) {
    const mainMenu = new MobileMenu('.main-menu', '.page-header__inner--desktop');
    const footerMenu = new MobileMenu('.footer-menu');
    this.flickitySet = new FlickitySet('[data-flickity-options]');

    // Подмена ссылок для SEO
    Utils.replaceLink('data-href');

    // Загрузка SVG-спрайта
    SvgLoad.init(
        (window.location.hostname === 'localhost') ?
        '/images/icons.svg' :
        '/images/icons.svg'
    );

    // Автоматическая высота для textarea
    autosize(document.querySelectorAll('textarea'));
});