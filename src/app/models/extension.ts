export interface Extension {
    name: string;
    publisher: string;
    risk: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
}