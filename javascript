// iterationComponent.js
import { LightningElement } from 'LWC';

export default class IterationComponent extends LightningElement {
    companies = [
        { id: 1, name: 'Apple', description: 'Mobile Company' },
        { id: 2, name: 'Google', description: 'Search Engine Company' },
        { id: 3, name: 'Salesforce', description: 'CRM Company' }
        // Add more companies as needed
    ];
}
