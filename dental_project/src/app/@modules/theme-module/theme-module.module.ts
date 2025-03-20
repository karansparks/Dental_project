import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { AvatarModule } from 'primeng/avatar';
import { AccordionModule } from 'primeng/accordion';
import { AvatarGroupModule } from 'primeng/avatargroup';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    Tag,
    CardModule,
    MenubarModule,
    FluidModule,
    InputTextModule,
    AvatarModule,
    AccordionModule,
    AvatarGroupModule
  ],
  exports: [ButtonModule,ImageModule,MenubarModule,ListboxModule,CarouselModule,Tag,CardModule,InputTextModule,FluidModule,AvatarModule,AccordionModule,AvatarGroupModule]
})
export class ThemeModuleModule { }
