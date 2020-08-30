import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatTableModule, MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatListModule} from '@angular/material';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        TextFieldModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        TextFieldModule,
        MatIconModule,
        MatListModule
    ]
})
export class MaterialModule { }
