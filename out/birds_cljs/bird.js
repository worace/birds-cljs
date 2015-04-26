// Compiled by ClojureScript 0.0-2740 {}
goog.provide('birds_cljs.bird');
goog.require('cljs.core');
goog.require('quil.core');
birds_cljs.bird.create_bird = (function create_bird(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null,(500)),cljs.core.rand.call(null,(500))], null),new cljs.core.Keyword(null,"dir","dir",1734754661),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"speed","speed",1257663751),(3)], null);
});
birds_cljs.bird.next_position = (function next_position(bird){
var x = cljs.core.first.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird));
var y = cljs.core.last.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(bird) * quil.core.cos.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird)))),(y + (new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(bird) * quil.core.sin.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird))))], null);
});
birds_cljs.bird.move_bird = (function move_bird(bird){
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"position","position",-2011731912),birds_cljs.bird.next_position.call(null,bird));
});
birds_cljs.bird.movement_vector = (function movement_vector(bird){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird),birds_cljs.bird.next_position.call(null,bird));
});
birds_cljs.bird.movement_vector = (function movement_vector(bird){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird),birds_cljs.bird.next_position.call(null,bird));
});
birds_cljs.bird.rotate_bird = (function rotate_bird(bird){
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),cljs.core.mod.call(null,(0.1 + new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird)),quil.core.TWO_PI));
});
