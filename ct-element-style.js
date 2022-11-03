import "@polymer/polymer/lib/elements/custom-style.js";

let template = document.createElement("template");
template.setAttribute("style", "display: none;");
template.innerHTML = `
<custom-style>
    <style>
        html {      
            --ct-spec-background-color: #ffffff;
            --ct-spec-general-background: #f9f9f9;
            --ct-spec-secondary-background-color: #f1f1f1;
            --ct-spec-secondary-background-color-inverse: #161616;
            --ct-menu-background: #fff;
            --ct-primary-text-color: #0d0d0d;
            --ct-primary-text-color-inverse: #fff;
            --ct-secondary-text-color: #606060;
            --ct-secondary-text-color-inverse: #aaa;
            --ct-text-disabled: #909090;
            --ct-primary-error-color: #c00;
            --ct-icon-active: #606060;
            --ct-icon-inactive: #909090;
            --ct-icon-disabled: #ccc;
            --ct-line-divider: rgba(0, 0, 0, 0.1);
            --ct-line-divider-solid: #e6e6e6;
            --ct-container-border-color: #ccc;
            --ct-container-border-color-inverse: #606060;
            --ct-container-hovered-border-color: #909090;
            --ct-call-to-action: #065fd4;
            --ct-call-to-action-raised-background: #065fd4;
            --ct-text-primary-inverse: #fff;
            --ct-text-secondary-inverse: #aaa;
            --ct-text-disabled-inverse: #717171; 
            --ct-call-to-action-inverse: #3ea6ff;
            --ct-call-to-action-raised-background-inverse: #3ea6ff;
            --ct-container-border-color: #ccc;
            --ct-spec-touch-response: #000;
            --ct-spec-spec-blue: #065fd4;
            --ct-call-to-action-ripple: rgba(6, 95, 212, 0.2);
            --ct-call-to-action-ripple-inverse: rgba(62, 166, 255, 0.2);
            --ct-call-to-action-raised-ripple: rgba(255, 255, 255, 0.2);
            --ct-call-to-action-raised-ripple-inverse: rgba(0, 0, 0, 0.2);
            --ct-call-to-action-raised-divider: rgba(0, 0, 0, 0.5);
            --ct-call-to-action-raised-disabled: #fff;
            --ct-call-to-action-raised-disabled-background: #ccc;
            --ct-call-to-action-raised-disabled-inverse: #0d0d0d;
            --ct-call-to-action-raised-disabled-background-inverse: #606060;
            --ct-spec-static-white: #fff;
            --ct-selected-item: #f1f1f1;
            --ct-hover-item: #f9f9f9;
            --ct-static-overlay-drop-shadow: rgba(0, 0, 0, 0.12);
            --ct-badge-grey: rgba(0, 0, 0, 0.06);
            --ct-badge-blue: #f2f8fc;
            --ct-badge-blue-solid: #f2f8fc;
            --ct-badge-green: #e5f1e5;
            --ct-badge-red: #f9e5e5;
            --ct-badge-yellow: #fff8e5;
            --ct-focus: #065fd4;
            --ct-themed-blue: #065fd4;
            --ct-themed-green: #007800;
            --ct-themed-red: #c00;
            --ct-themed-yellow: #fbc02d;
            --ct-static-yellow: #fbc02d;
            --ct-suggested-action: #def1ff;
            --ct-badge-grey: rgba(0, 0, 0, 0.06);
            --ct-badge-blue: #f2f8fc;
            --ct-badge-blue-solid: #f2f8fc;
            --ct-badge-green: #e5f1e5;
            --ct-badge-red: #f9e5e5;
            --ct-badge-yellow: #fff8e5;
            --ct-themed-blue-inverse: #3ea6ff;
            --ct-themed-green-inverse: #2ba640;
            --ct-themed-red-inverse: #ff4e45;
            --ct-yellow-inverse: #815000;
            --ct-static-overlay-background-solid: #000;
            --ct-static-overlay-background-heavy: rgba(0, 0, 0, 0.8);
            --ct-static-overlay-background-medium: rgba(0, 0, 0, 0.6);
            --ct-static-overlay-background-medium-light: rgba(0, 0, 0, 0.3);
            --ct-static-overlay-background-red: rgba(204, 0, 0, 0.9);
            --ct-static-overlay-background-a20: rgba(0, 0, 0, 0.2);
            --ct-static-overlay-background-a70: rgba(0, 0, 0, 0.7);
            --ct-static-overlay-tooltip-background: rgba(96, 96, 96, 0.9);
            --ct-overlay-text-secondary: rgba(255, 255, 255, 0.7);
            --ct-overlay-text-disabled: rgba(255, 255, 255, 0.3);
            --ct-static-overlay-text-primary: #fff;
            --ct-static-overlay-text-secondary: rgba(255, 255, 255, 0.7);
            --ct-static-overlay-text-disabled: rgba(255, 255, 255, 0.3);
        }

        html[ct-dark] {
         --ct-spec-background-color: #282828;
         --ct-spec-general-background: #1f1f1f;
         --ct-spec-secondary-background-color: #161616;
         --ct-spec-secondary-background-color-inverse: #f1f1f1;

         --ct-menu-background: #1f1f1f;

         --ct-primary-text-color: #fff;
         --ct-primary-text-color-inverse: #0d0d0d;
         --ct-secondary-text-color: #aaa;
         --ct-secondary-text-color-inverse: #606060;
         --ct-text-disabled: #717171;

         --ct-primary-error-color: #ff4e45;

         --ct-icon-active: #fff;
         --ct-icon-inactive: #909090;
         --ct-icon-disabled: #606060;
         --ct-line-divider: rgba(255, 255, 255, 0.1);
         --ct-line-divider-solid: #3d3d3d;
         --ct-container-border-color: #606060;
         --ct-container-border-color-inverse: #ccc;
         --ct-container-hovered-border-color: #717171;

         --ct-call-to-action: #3ea6ff;
         --ct-call-to-action-raised-background: #3ea6ff;

         --ct-text-primary-inverse: #0d0d0d;
         --ct-text-secondary-inverse: #606060;
         --ct-text-disabled-inverse: #909090;
         --ct-call-to-action-inverse: #065fd4;
         --ct-call-to-action-raised-background-inverse: #065fd4;

         --ct-container-border-color: #606060;

         --ct-spec-touch-response:#fff;
         --ct-spec-spec-blue: #3ea6ff;

         --ct-call-to-action-ripple: rgba(62, 166, 255, 0.2);
         --ct-call-to-action-ripple-inverse: rgba(6, 95, 212, 0.2);
         --ct-call-to-action-raised-ripple: rgba(0, 0, 0, 0.2);
         --ct-call-to-action-raised-ripple-inverse: rgba(255, 255, 255, 0.2);

         --ct-call-to-action-raised-divider: rgba(255, 255, 255, 0.5);

         --ct-call-to-action-raised-disabled: #0d0d0d;
         --ct-call-to-action-raised-disabled-background: #606060;

         --ct-call-to-action-raised-disabled-inverse: #fff;
         --ct-call-to-action-raised-disabled-background-inverse: #ccc;

         --ct-selected-item: #161616;
         --ct-hover-item: #1f1f1f;

         --ct-badge-grey: rgba(255, 255, 255, 0.1);
         --ct-badge-blue: rgba(62, 166, 255, 0.12);
         --ct-badge-blue-solid: #2b3742;
         --ct-badge-green: rgba(43, 166, 64, 0.1);
         --ct-badge-red: #2a2222;
         --ct-badge-yellow: #35331e;


         --ct-axis-line-color: rgb(158, 158, 158);

         --ct-focus: #3ea6ff;


             --ct-themed-blue: #3ea6ff;
          --ct-themed-green: #2ba640;
          --ct-themed-red: #ff4e45;
          --ct-themed-yellow: #815000;
          --ct-suggested-action: #263850;
          --ct-badge-grey: rgba(255, 255, 255, 0.1);
          --ct-badge-blue: rgba(62, 166, 255, 0.12);
          --ct-badge-blue-solid: #2b3742;
          --ct-badge-green: rgba(43, 166, 64, 0.1);
          --ct-badge-red: #2a2222;
          --ct-badge-yellow: #35331e;

          --ct-themed-blue-inverse: #065fd4;
          --ct-themed-green-inverse: #007800;
          --ct-themed-red-inverse: #c00;
          --ct-yellow-inverse: #fbc02d;
      }
    </style>
</custom-style>
`;
document.head.appendChild(template.content);


template = document.createElement("template");
template.setAttribute("style", "display: none;");
template.innerHTML = `
<custom-style>
   <style>
      html {      
         --ct-primary-font-family: "Poppins", sans-serif;
         --ct-primary-font-smoothing: antialiased;
      
        --ct-primary-font-common-code-font-family: "Roboto Mono", "Consolas", "Menlo", monospace;
        --ct-primary-font-common-code-smoothing: antialiased;

         --ct-header-progress-bar-height: 4px;
         --ct-paper-progress-background-color: var(--ct-icon-active);
         --ct-paper-progress-color: #37a0ce;

         --ct-header-height: 60px;
         --ct-header-background-color: var(--ct-spec-background-color);

         --ct-vertical-bumpers-size: 48px;

         --core-app-dialog-background-color: var(--ct-spec-background-color);
         --core-app-vertical-bumpers-size: var(--ct-vertical-bumpers-size);

         --entity-page-header-height: 70px;

         --ct-container-border: 1px solid var(--ct-container-border-color);
         --core-app-dialog-border-radius: 6px;
         --ct-container-border-radius: 4px;
         --ct-container-padding-spacing: 12px;
         --ct-large-container-spacing: 24px;
         --form-field-horizontal-padding: 12px;

         --outgoing-curve: cubic-bezier(0.4, 0, 1, 1);
         --incoming-curve: cubic-bezier(0, 0, 0.2, 1);
         --incoming-outgoing-curve: cubic-bezier(0.4, 0, 0.2, 1);
         --custom-curve: cubic-bezier(0.2, 0, 0, 1);
         --loading-duration: 417ms;
         --loading-animation: fade-in var(--loading-duration) var(--incoming-curve) forwards;
         --default-transition: all 300ms linear;
         --default-fading-animation: fade-in 300ms linear;
         --common-duration-150: 150ms;
         --common-duration-200: 200ms;
         --common-duration-250: 250ms;
         --common-duration-300: 300ms;
         --common-duration-450: 450ms;
         --common-duration-500: 500ms;

         --paper-listbox-background-color: var(--ct-spec-background-color);
         --paper-listbox-color: var(--ct-primary-text-color);
         --paper-spinner-layer-1-color: var(--ct-icon-inactive);
         --paper-spinner-layer-2-color: var(--ct-icon-inactive);
         --paper-spinner-layer-3-color: var(--ct-icon-inactive);
         --paper-spinner-layer-4-color: var(--ct-icon-inactive);
         --paper-spinner-color: var(--ct-icon-inactive);
         --paper-input-container-focus-color: var(--ct-spec-spec-blue);
         --paper-input-container-input-color: var(--ct-primary-text-color);


         --paper-checkbox-unchecked-background-color: transparent;
         --paper-checkbox-unchecked-color: var(--ct-icon-inactive);
         --paper-checkbox-unchecked-ink-color: var(--ct-icon-inactive);
         --paper-checkbox-checked-color: var(--ct-call-to-action);
         --paper-checkbox-checked-ink-color: var(--ct-call-to-action);
         --paper-checkbox-checkmark-color: var(--ct-text-primary-inverse);
         --paper-checkbox-label-color: var(--ct-primary-text-color);


         --paper-checkbox-label-spacing: 16px;
         --paper-checkbox-size: 20px;
         --paper-checkbox-checkmark-color: var(--ct-text-primary-inverse);
         --paper-radio-button-unchecked-color: var(--ct-icon-inactive);
         --paper-radio-button-unchecked-ink-color: var(--ct-icon-inactive);
         --paper-radio-button-checked-color:  var(--ct-call-to-action);
         --paper-radio-button-checked-ink-color:  var(--ct-call-to-action);
         --paper-radio-button-label-spacing: 16px;
         --paper-radio-button-label-color: var(--ct-primary-text-color);
         --paper-radio-button-size: 20px;
         --calculated-paper-radio-button-size: 16px;
         --paper-radio-button-label-spacing: var(--ct-container-padding-spacing);
          --paper-radio-group-item-padding: var(--ct-container-padding-spacing);

         --paper-item: {
            white-space:nowrap;
            font-size:initial;
            font-weight:initial;
            line-height:initial;
         };

         --paper-toggle-button-unchecked-bar-color: var(--ct-icon-disabled);
         --paper-toggle-button-unchecked-button-color: var(--ct-icon-inactive);
         --paper-toggle-button-checked-bar-color: var(--ct-icon-disabled);
         --paper-toggle-button-checked-button-color: var(--ct-call-to-action);
         --paper-toggle-button-checked-ink-color: var(--ct-call-to-action);
         --paper-toggle-button-unchecked-ink-color: var(--ct-spec-touch-response);

         --paper-tab-content-unselected: {
            opacity: 1;
            color: initial;
         };

         --paper-menu-background-color: var(--ct-spec-background-color);

         --paper-tabs-selection-bar-color:var(--ct-spec-spec-blue);
         --paper-tab-ink:var(--ct-spec-spec-blue);
         --paper-tabs-selection-bar: {
            border-width: 2px;
         };

         --button-icon-size: 24px;
         --button-icon-padding: 8px;

         --button-icon-color: var(--ct-icon-active);
         --button-icon-focused-color: var(--ct-primary-text-color);
         --button-icon-disabled-color: var(--ct-text-disabled);

         --ct-shadow-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
         --ct-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                      0 1px 5px 0 rgba(0, 0, 0, 0.12),
                      0 3px 1px -2px rgba(0, 0, 0, 0.2);

         --ct-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                      0 1px 8px 0 rgba(0, 0, 0, 0.12),
                      0 3px 3px -2px rgba(0, 0, 0, 0.4);

         --ct-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                      0 1px 10px 0 rgba(0, 0, 0, 0.12),
                      0 2px 4px -1px rgba(0, 0, 0, 0.4);

         --ct-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                      0 1px 18px 0 rgba(0, 0, 0, 0.12),
                      0 3px 5px -1px rgba(0, 0, 0, 0.4);

         --ct-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                      0 3px 14px 2px rgba(0, 0, 0, 0.12),
                      0 5px 5px -3px rgba(0, 0, 0, 0.4);

         --ct-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                      0 4px 22px 3px rgba(0, 0, 0, 0.12),
                      0 6px 7px -4px rgba(0, 0, 0, 0.4);

         --ct-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                      0  6px 30px 5px rgba(0, 0, 0, 0.12),
                      0  8px 10px -5px rgba(0, 0, 0, 0.4);

         --ct-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                      0 9px 46px 8px rgba(0, 0, 0, 0.12),
                      0 11px 15px -7px rgba(0, 0, 0, 0.4);

         --entity-page-max-width: 1280px;
          --entity-page-header-capped-max-width: var(--entity-page-max-width);

         --container-spacing-mid: 16px;
         --container-spacing-bottom: 24px;
         --form-input-container-padding: 0 16px 3px 16px;


          --usl-app-datepicker-bg: var(--ct-spec-general-background);
         --usl-app-datepicker-selection-color: var(--ct-primary-text-color);
         --usl-app-datepicker-selection-bg: var(--ct-spec-background-color);
         --usl-app-datepicker-selected-year-color: var(--ct-primary-text-color);
         --usl-app-datepicker-selected-year-bg: transparent;
         --usl-app-datepicker-calendar-color: var(--ct-primary-text-color);
         --usl-app-datepicker-calendar-bg: var(--ct-spec-background-color);
         --usl-app-datepicker-weekdays-color: var(--ct-call-to-action-raised-divider);
         --usl-app-datepicker-disabled-color: var(--ct-text-disabled);
         --usl-app-datepicker-selected-day-bg: var(--ct-spec-spec-blue);
         --usl-app-datepicker-selected-day-color: var(--ct-spec-static-white);
         --usl-app-datepicker-icon-button-color: var(--ct-icon-active);
         --usl-app-datepicker-icon-button-ink-color: var(--ct-primary-text-color);
         --usl-app-datepicker-today-color: var(--ct-spec-spec-blue);
         --usl-app-datepicker-button-ink-color: var(--ct-spec-spec-blue);
         --usl-app-datepicker-date-hover-color: var(--ct-primary-text-color);
         --usl-app-datepicker-date-hover-background-color: var(--ct-spec-secondary-background-color);
         --usl-app-datepicker-iron-selected: var(--ct-secondary-text-color);
         --usl-app-datepicker-year-hover-background-color: var(--ct-spec-secondary-background-color);
         --usl-app-datepicker-selected-date: {
            outline: none;
            display: block;
            font-size: 28px;
            line-height: calc(28px + 6px);
            -webkit-font-smoothing: var(--ct-primary-font-smoothing);
         };

         --usl-app-datepicker-selected-year: {
            outline: none;
            font-size: 16px;
            -webkit-font-smoothing: var(--ct-primary-font-smoothing);
            height: 30px;
         };

         --next-continuation-continuation-message-color: var(--ct-primary-text-color);
         
         --ct-font-caption1-baseline-top: 12px;
         --icon-standard-length: 24px;
          --icon-standard-padding: 8px;
          --icon-compact-length: 20px;
          --icon-compact-padding: 6px;
          --icon-mini-length: 16px;
          --icon-color: var(--ct-secondary-text-color);
          --icon-disabled-color: var(--ct-text-disabled);
          --icon-focused-color: var(--ct-primary-text-color);
            --ct-standard-border-radius: 4px;
          --ct-extended-border-radius: 6px;
          --ct-form-field-horizontal-padding: 12px;
          --ct-form-fields-gap: 24px;
          --ct-form-fields-compact-gap: 16px;
      }
   </style>
</custom-style>
`;

document.head.appendChild(template.content);