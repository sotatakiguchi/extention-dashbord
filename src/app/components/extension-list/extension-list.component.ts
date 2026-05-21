import { Component, OnInit } from '@angular/core';
import { ExtensionService } from '../../services/extension.service';
import { Extension } from '../../models/extension';

@Component({
    selector: 'app-extension-list',
    templateUrl: './extension-list.component.html',
    styleUrls: ['./extension-list.component.scss']
})
export class ExtensionListComponent implements OnInit {

    extensions: Extension[] = [];
    filtered: Extension[] = [];
    keyword = '';

    constructor(private service: ExtensionService) {}

    ngOnInit(): void {
    this.service.getAll().subscribe(data => {
        this.extensions = data;
        this.filtered = data;
    });
    }

    filter(): void {
        this.filtered = this.extensions.filter(e =>
        e.name.toLowerCase().includes(this.keyword.toLowerCase())
        || e.publisher.toLowerCase().includes(this.keyword.toLowerCase())
    );
    }
}
