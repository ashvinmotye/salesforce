import { LightningElement, api } from 'lwc';

export default class Marquee extends LightningElement {
    /**
     * @description Properties from component
     */
    @api message;
    @api height;
    @api backgroundColor;
    @api isFixedDisplay;

    /**
     * @description Flag to track if component has rendered
     */
    hasComponentRendered = false;

    /**
     * @description CSS properties to set if component is set to fixed display on top of screen
     */
    fixedStyleString = `position:fixed;top:0;left:0;z-index:999;`;

    /**
     * @description Getter to define style of marquee based on properties
     */
    get style() {
        let styleString = `--height: ${this.height}px;`;
        styleString += `--background: ${this.backgroundColor};`;
        styleString += this.isFixedDisplay ? this.fixedStyleString : '';
        return styleString;
    }

    /**
     * @description renderedCallback lifecycle method
     */
    renderedCallback() {
        this.renderOnce();
    }

    /**
     * @description renderedCallback helper method
     */
    renderOnce() {
        // Execute method for one render only
        if(this.hasComponentRendered) {
            return;
        }

        this.addMarginToBodyInDOM();

        // Set component has been rendered
        this.hasComponentRendered = true;
    }

    /**
     * @description Modify DOM to add margin to body element
     */
    addMarginToBodyInDOM() {
        if(!this.isFixedDisplay) {
            return;
        }

        const style = document.createElement('style');
        style.innerText = `body { margin-top: ${this.height}px; }`;
        this.template.querySelector('.marquee').appendChild(style);
    }
}