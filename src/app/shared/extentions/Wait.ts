import { Observable, take } from 'rxjs';

function getAwaitable(item: Observable<any>) {
    return new Promise(resolve=>{
        item.subscribe((data:any) => {
                resolve(data);
         });
    });
}

export function wait<T>(item: Observable<any>) {
    return getAwaitable(item).then(x => {return x as T});
}