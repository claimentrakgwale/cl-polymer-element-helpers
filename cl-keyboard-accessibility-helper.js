export const backspaceDataHelper = {
    code: "Backspace",
    keyCode: 8
};

export const deleteDataHelper = {
    code: "Delete",
    keyCode: 46
};

export const commaDataHelper = {
    code: "Comma",
    keyCode: 188
};

export const endDataHelper = {
    code: "End",
    keyCode: 35
};

export const enterDataHelper = {
    code: "Enter",
    keyCode: 13
};

export const escapeDataHelper = {
    code: "Escape",
    keyCode: 27
};

export const spaceDataHelper = {
    code: "Space",
    keyCode: 32
};

export const numpadEnterDataHelper = {
    code: "NumpadEnter",
    keyCode: 13
};

export const arrowLeftDataHelper = {
    code: "ArrowLeft",
    keyCode: 37
};

export const arrowRightDataHelper = {
    code: "ArrowRight",
    keyCode: 39
};

export const arrowUpDataHelper = {
    code: "ArrowUp",
    keyCode: 38
};

export const arrowDownDataHelper = {
    code: "ArrowDown",
    keyCode: 40
};

export const tabDataHelper = {
    code: "Tab",
    keyCode: 9
};

export const commaKeysDataHelper = [",", "\u3001", "\uFF0C"];

export const keyMatch = function (event, data) {
    return event.keyCode ? event.keyCode === data.keyCode : event.code ? event.code === data.code : false
};

export const isEnterKey = function ( event ) {
    return keyMatch(event, enterDataHelper) || keyMatch(event, numpadEnterDataHelper)
};

export const isCommaKey = function ( event ) {
    return event.key ? -1 !== commaKeysDataHelper.indexOf(event.key) : keyMatch(event, commaDataHelper)
};

export class clKeyboardAccessibilityHelper {
	constructor () {
	    this.enabled = false;
	    window.addEventListener("keydown", this.onKeyDown.bind(this));
	    window.addEventListener("mousedown", this.onMouseDown.bind(this))
	}

	isEnabled () {
		return this.enabled
	}

	onMouseDown () {
        this.enabled = false
    }

    onKeyDown ( event ) {
        if (keyMatch(event, tabDataHelper) || keyMatch(event, escapeDataHelper) || keyMatch(event, arrowLeftDataHelper) || keyMatch(event, arrowRightDataHelper) || keyMatch(event, arrowUpDataHelper) || keyMatch(event, arrowDownDataHelper) || isEnterKey(event))
            this.enabled = !0
    }
};