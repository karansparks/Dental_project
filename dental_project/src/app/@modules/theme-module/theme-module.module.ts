import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    Tag,
    CardModule,
    MenubarModule
  ],
  exports: [ButtonModule,ImageModule,MenubarModule,ListboxModule,CarouselModule,Tag,CardModule]
})
export class ThemeModuleModule { }
