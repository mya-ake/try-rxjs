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

observar.do(
  (ob) => {
    console.log(ob)
    throw new Error('error!!!!')
  }
)
  .subscribe(
    (value) => {
      console.log(`Ob: ${value}`)
    },
    (error) => {
      console.error(`ObError: ${error}`)
    }
  )
