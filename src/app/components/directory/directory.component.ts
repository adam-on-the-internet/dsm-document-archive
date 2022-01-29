import {Component} from '@angular/core';
import {DOCUMENTS} from "../../constants/document.constants";
import {DocumentInfo} from "../../models/general/DocumentInfo.model";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  public directoryHeaderMarkdownPath = `assets/directory-header.md`;
  public documents: DocumentInfo[] = DOCUMENTS;
}
