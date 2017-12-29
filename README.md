# backbone-parcel-nwjs

Simple Parcel Backbone and NW.js app
 - [Backbone](https://github.com/jashkenas/backbone)
 - [Parcel](https://github.com/parcel-bundler/parcel)
 - [NW.js](https://github.com/nwjs/nw.js)
 - [Babel](https://github.com/babel/babel)

## Usage

To run the application you need to run two commands at the same time:
 - `npm run parcel`, for watching and bundling
 - `npm run nwjs`, to run the nwjs instance

### scripts

```
 $ npm run build    # Compile binaries
 $ npm run lint     # Lint with standard
 $ npm run parcel   # Bundle with parcel
 $ npm run nwjs     # Run nwjs with nwjs-builder-phoenix
```

## TODO

 - [ ] Run `npm run nwjs` and `npm run parcel` in one command
 - [ ] Move templates to seperate files
 - [ ] Use difference template engine, if seperate templates do not work
 - [ ] HMR with nwjs

## License

MIT License
