import { LightningElement, api } from 'lwc';
import formFactorPropertyName from "@salesforce/client/formFactor";

const DESKTOP_SIZE = 'Large';

export default class SocialMediaFooter extends LightningElement {
    /**
     * @description Properties from component
     */
    @api textColor;
    @api lineColor;
    @api iconColor;
    @api iconsAlignment;
    @api openLinkInNewTab;
    @api showIconOnHover;
    @api enableIconMovement;

    @api facebook;
    @api instagram;
    @api x;
    @api linkedin;
    @api youtube;

    /**
     * @description Getter to define style of component based on properties
     * @returns String
     */
    get style() {
        let styleString = `--text-color: ${this.textColor};`;
        styleString += `--line-color: ${this.lineColor};`;
        styleString += `--icon-color: ${this.iconColor};`;
        styleString += `--icons-alignment: ${this.getCSSAlignmentProperty()};`;
        return styleString;
    }

    /**
     * @description Getter to define link target
     * @returns String
     */
    get linkTarget() {
        return this.openLinkInNewTab ? '_blank' : '_self';
    }

    /**
     * @description Getter to check if device is Desktop
     * @returns Boolean
     */
    get isDesktop() {
        return formFactorPropertyName == DESKTOP_SIZE;
    }

    /**
     * @description Getter to display icon only on Desktops
     * @returns Boolean
     */
    get displayIconForDesktopOnly() {
        return this.isDesktop && this.showIconOnHover;
    }

    /**
     * @description Getter to define attribute value for data-hover
     * data-hover="text-hover" used in CSS
     * to prevent text getting opacity 0
     * @returns String
     */
    get textHoverAttribute() {
        return this.displayIconForDesktopOnly ? '' : 'text-hover'
    }

    /**
     * @description Getter to get Boolean value for icon movement
     * Checks for both icon is shown and movement is enabled
     * Movement is disabled for resolutions less than Desktop
     * @returns Boolean
     */
    get hasIconMovement() {
        return this.displayIconForDesktopOnly && this.enableIconMovement && this.isDesktop;
    }

    /**
     * @description Convert icons alignment choice into CSS property
     * Center = center
     * Left = start
     * Right = end
     * @returns String
     */
    getCSSAlignmentProperty() {
        console.log(formFactorPropertyName);
        switch(this.iconsAlignment) {
            case 'Left': 
                return 'start';
            case 'Right': 
                return 'end';
            default: 
                return 'center';
        }
    }

    /**
     * @description Event handler for mouse move on links with icons
     * @param {*} event 
     * @returns void
     */    
    hoverLink(event) {
        if(!this.hasIconMovement) {
            return;
        }

        const movementSpeed = 3;
        const targetNode = event.target;

        const { left, top, width, height } = targetNode.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        let x = (centerX - event.pageX) / movementSpeed;
        let y = (centerY - event.pageY) / movementSpeed;
    
        targetNode.style.setProperty('--x', `${x}px`);
        targetNode.style.setProperty('--y', `${y}px`);
    }
}