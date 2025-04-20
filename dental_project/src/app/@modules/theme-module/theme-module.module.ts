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
import { ImageCompareModule } from 'primeng/imagecompare';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

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
    AvatarGroupModule,
    ImageCompareModule,
    AnimateOnScroll,BadgeModule,
    OverlayBadgeModule
  ],
  exports: [ButtonModule,ImageModule,BadgeModule,
    OverlayBadgeModule,ImageCompareModule,MenubarModule,ListboxModule,CarouselModule,Tag,CardModule,InputTextModule,FluidModule,AvatarModule,AccordionModule,AvatarGroupModule,AnimateOnScroll]
})
export class ThemeModuleModule { }
