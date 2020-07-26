import { Pipe, PipeTransform } from '@angular/core';

const image: string = 'assets/img/noimage.png';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {


  transform(images: any[]): string {
    if (!images) {
      return image;
    }


    if (images.length > 0) {
      return images[0].url;
    } else {
      return image;
    }
  }

}
