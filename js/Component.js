'use strict';

export default class Component {
    constructor() {
        this.id = Component.getNextId(); 
    }

    
    static getNextId() {
        this.id++;
        return this.id;
    }

    setContainer( container ) {
        this.container = container;
    }

   
    render() {
        return;
    }
}

Component.id = 0;