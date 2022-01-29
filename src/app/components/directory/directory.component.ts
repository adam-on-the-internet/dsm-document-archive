import {Component} from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  public directoryHeaderMarkdownPath = `assets/directory-header.md`;
  public documents = [];
}
