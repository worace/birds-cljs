(ns birds-cljs.core
  (:require [quil.core :as q :include-macros true]
            [birds-cljs.bird :as b]
            [birds-cljs.flock :as f]
            [quil.middleware :as m]))
(enable-console-print!)

(def bounds [1000 600])
(def grass [153 255 153])
(def blue [0 128 255])
(defn setup [] {:flock (f/create-flock 30)})

(defn wrap-coord
  [coord bound]
  (if (< coord 0)
    (+ bound coord)
    (mod coord bound)))

(defn wrap-birds
  [flock bounds]
  (map (fn [b]
         (let [pos (:position b)
               newx (wrap-coord (first pos) (first bounds))
               newy (wrap-coord (last pos) (last bounds))]
           (assoc b :position [newx newy])))
       flock))

(defn update-state [state]
  (assoc state :flock (wrap-birds (f/update-flock (:flock state)) bounds)))

(defn draw-bird [bird]
  (apply q/fill blue)
  (let [[x1 y1 x2 y2] (b/movement-vector bird)]
    (q/push-matrix)
    (q/translate x1 y1)
    (q/rotate (:dir bird))
    (q/no-stroke)
    (q/ellipse 0 0 25 8)
    (q/triangle 0 0 -15 7 -15 -7)
    (q/triangle 8 0 0 20 0 -20)
    (q/pop-matrix)
  )
  ;(apply q/line (b/movement-vector bird))
  )

(defn draw-flock [flock]
  (doseq [bird flock] (draw-bird bird)))

(defn draw [state]
  (apply q/background grass)
  (draw-flock (:flock state)))

(q/defsketch birds-cljs
  :host "birds-cljs"
  :size bounds
  :setup setup
  :update update-state
  :draw draw
  :middleware [m/fun-mode])
