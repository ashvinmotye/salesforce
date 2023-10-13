import { LightningElement, track } from 'lwc';
import { data } from './data';

const CLASS_NAMES = {
    active: 'active',
    new: 'new'
}
export default class Slider extends LightningElement {
    @track slides = data;

    /**
     * @description renderedCallback lifecycle method
     */
    renderedCallback() {
        this.initSlider();
    }

    /**
     * @name initSlider
     * @description Add active class to first slide and first pagination dot
     */
    initSlider() {
        /**
         * @summary When the component renders, all slides are 'out' of the screen
         * The active class brings the first slide into the sreen to be visible
         * The active class to the pagination sets button opacity to 1
         */
        this.template.querySelector('.slide').classList.add(CLASS_NAMES.active);
        this.template.querySelector('.slider--pagination button').classList.add(CLASS_NAMES.active);
    }

    /**
     * @name handlePaginationClick
     * @description Change slide on pagination click
     * @param {*} event 
     */
    handlePaginationClick = (event)=>{
        let button = event.target;
    
        if(button.classList.contains(CLASS_NAMES.active)) {
            return;
        }
        
        let selectedSlide = button.dataset.slide;
        let currentSlide = this.template.querySelector('.slide.active');
    
        this.template.querySelector('.slider--pagination button.active').classList.remove(CLASS_NAMES.active);
        button.classList.add(CLASS_NAMES.active);
        
        this.template.querySelector(`.slide[data-slide='${selectedSlide}']`).classList.add(CLASS_NAMES.active, CLASS_NAMES.new);
    
        this.helperHandleSlideChange(currentSlide);
    }

    /**
     * @name handleArrowClick
     * @description Change slide on arrows click
     * @param {*} event 
     */
    handleArrowClick = (event) => {
        const button = event.target;
        const isNext = button.classList.contains('slider--next');
        const maxSlideIndex = this.slides.length - 1;
        const currentSlide = this.template.querySelector('.slider--content .slide.active');
        const currentSlideNumber = Number(currentSlide.dataset.slide);
        let targetSlideNumber = currentSlideNumber;
    
        if(isNext) {
            targetSlideNumber = targetSlideNumber >= maxSlideIndex ? 0 : ++targetSlideNumber;
        } else {
            targetSlideNumber = targetSlideNumber <= 0 ? maxSlideIndex : --targetSlideNumber;
        }
    
        this.template.querySelector('.slider--pagination button.active').classList.remove(CLASS_NAMES.active);
        this.template.querySelector(`.slider--pagination button[data-slide='${targetSlideNumber}']`).classList.add(CLASS_NAMES.active);
        this.template.querySelector(`.slider--content .slide[data-slide='${targetSlideNumber}']`).classList.add(CLASS_NAMES.active, CLASS_NAMES.new);
    
        this.helperHandleSlideChange(currentSlide);
    }

    /**
     * @name helperHandleSlideChange
     * @description Helper to move slide out of screen when next slide animation completes
     * @param {*} currentSlide 
     */
    helperHandleSlideChange = (currentSlide) => {
        setTimeout(()=>{
            currentSlide.classList.remove(CLASS_NAMES.active);
            this.template.querySelector('.slide.new').classList.remove(CLASS_NAMES.new);
        }, 1000);
    }
}