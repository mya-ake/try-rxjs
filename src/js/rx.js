import * as Rx from 'rxjs-es'

const myObservable = new Rx.Subject()
myObservable.subscribe((value) => {
  console.log(`Sub: ${value}`)
})
myObservable.map(value => {
  return value.trim()
}).subscribe((value) => {
  console.log(`Sub: ${value}`)
})
myObservable.next('  subject   ')
console.log(myObservable)

const observar = Rx.Observable.of('  observable   ')
observar.subscribe((value) => {
  console.log(`Ob: ${value}`)
})

observar.map((value) => {
  return value.trim()
})
  .subscribe((value) => {
    console.log(`Ob: ${value}`)
  })

// const myObservable2 = Rx.Observable.create(observer => {
//   observer.next('foo 2')
//   setTimeout(() => observer.next('bar'), 1000)
// })
// myObservable2.subscribe(value => console.log(value))