import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";

export const query = function(a) {
    return function(b, c) {
        Object.defineProperty(b, c, {
            get: function() {
                return dom(this.root).querySelector(a)
            },
            enumerable: true,
            configurable: true
        })
    }
};

export const queryAll = function(a) {
    return function(b, c) {
        Object.defineProperty(b, c, {
            get: function() {
                return dom(this.root).querySelectorAll(a)
            },
            enumerable: true,
            configurable: true
        })
    }
};

export const listen = function(a) {
    return function(b, c) {
        b.listeners = b.listeners || {};
        b.listeners[a] = c
    }
};

/**
 * @license
 * Copyright 2014-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

export const getParentNode = function (a) {
    a = a.assignedSlot || a;
    return a.parentNode && a.parentNode instanceof DocumentFragment && a.parentNode.host ? a.parentNode.host : a.parentElement;
};

export const activeElement = function () {
    for ( let activeElement = document.activeElement; activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement; )
        activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};

export const symbolIteratorNextHandler = function (a) {
    let b = 0;
    return function() {
        return b < a.length ? {
            done: false,
            value: a[b++]
        } : {
            done: true
        }
    };
};

export const symbolIterator = function (array) {
  let symbol = "undefined" != typeof Symbol && Symbol.iterator && array[Symbol.iterator];
  return symbol ? symbol.call(array) : {
    next: symbolIteratorNextHandler(array)
  };
};