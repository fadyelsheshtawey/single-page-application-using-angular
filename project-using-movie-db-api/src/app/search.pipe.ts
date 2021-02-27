import { Pipe, PipeTransform } from '@angular/core';
import { FileDetector } from 'protractor';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any, term:any): any {


   return movies.filter((movie:any)=>{


    if(movie.title != undefined)
    {
      return movie.title.toLowerCase().includes(term.toLowerCase())

    }
    else
    {
      return movie.name.toLowerCase().includes(term.toLowerCase())

    }
   })
    
    ;
  }

}
