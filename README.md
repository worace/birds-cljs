## birds

Example implementation of Craig Reynolds' [Boids automata algorithm](http://www.red3d.com/cwr/boids/) in
Clojure using the Quil library as an interface to Processing.

### Rules for Boids:

1. Birds attempt to avoid collisions with flockmates by steering away
   from neighbors average position when too close.
2. Birds attempt to follow a shared trajectory by steering toward the
   average heading of their neighbors.
3. Birds attempt to "flock" together by steering toward the average
   position of their neighbors.

Other topics to explore:

* Obstacle avoidance?
* Goal-seeking? (steer toward mouse or some other defined objective?)

#### Issues

* Rotation -- current heading rotation implementation has issues with
  turning in the optimal direction (i.e. turning right 30 degrees
  instead of left 330 degrees to reach the same heading). This produces
  some jumpy behavior sometimes.
* Pretty-fi the rendering -- would be cool to get some nicer
  colors/design/shapes into the Rendering
* ClojureScript/processing JS -- my eventual goal is to compile all this
  down into clojurescript and expose it on the web somehow

#### sample

A sample video of what the algorithm looks like so far can be seenhere:
[https://vimeo.com/126003095](https://vimeo.com/126003095).

### Usage

Should be able to run from the project root with

build the project with:

```
lein cljsbuild once
```

Then open the generated `index.html` in your browser.

```
open index.html
```

Alternatively you can have leiningen automatically re-compile cljs
sources on file-change:

```
lein cljsbuild auto
```

Then your index.html should get updated whenever a `src` file changes.

