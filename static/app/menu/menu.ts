import { Injectable} from '@angular/core';

export class Menu{
    constructor(public routerlink:string,
                public routerLinkActive:string,
                public aclass:string,
                public iclass:string,
                public title:string,
                public children:Menu[]){}
}