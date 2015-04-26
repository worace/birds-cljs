// Compiled by ClojureScript 0.0-2740 {}
goog.provide('birds_cljs.core');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('birds_cljs.flock');
goog.require('birds_cljs.bird');
goog.require('quil.core');
birds_cljs.core.bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null);
birds_cljs.core.setup = (function setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flock","flock",265984040),birds_cljs.flock.create_flock.call(null,(30))], null);
});
birds_cljs.core.wrap_coord = (function wrap_coord(coord,bound){
if((coord < (0))){
return (bound + coord);
} else {
return cljs.core.mod.call(null,coord,bound);
}
});
birds_cljs.core.wrap_birds = (function wrap_birds(flock,bounds){
return cljs.core.map.call(null,(function (b){
var pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(b);
var newx = birds_cljs.core.wrap_coord.call(null,cljs.core.first.call(null,pos),cljs.core.first.call(null,bounds));
var newy = birds_cljs.core.wrap_coord.call(null,cljs.core.last.call(null,pos),cljs.core.last.call(null,bounds));
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newx,newy], null));
}),flock);
});
birds_cljs.core.update_state = (function update_state(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"flock","flock",265984040),birds_cljs.core.wrap_birds.call(null,birds_cljs.flock.update_flock.call(null,new cljs.core.Keyword(null,"flock","flock",265984040).cljs$core$IFn$_invoke$arity$1(state)),birds_cljs.core.bounds));
});
birds_cljs.core.draw_bird = (function draw_bird(bird){
quil.core.ellipse.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird)),cljs.core.last.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird)),(10),(10));

return cljs.core.apply.call(null,quil.core.line,birds_cljs.bird.movement_vector.call(null,bird));
});
birds_cljs.core.draw_flock = (function draw_flock(flock){
var seq__6020 = cljs.core.seq.call(null,flock);
var chunk__6021 = null;
var count__6022 = (0);
var i__6023 = (0);
while(true){
if((i__6023 < count__6022)){
var bird = cljs.core._nth.call(null,chunk__6021,i__6023);
birds_cljs.core.draw_bird.call(null,bird);

var G__6024 = seq__6020;
var G__6025 = chunk__6021;
var G__6026 = count__6022;
var G__6027 = (i__6023 + (1));
seq__6020 = G__6024;
chunk__6021 = G__6025;
count__6022 = G__6026;
i__6023 = G__6027;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6020);
if(temp__4126__auto__){
var seq__6020__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6020__$1)){
var c__4546__auto__ = cljs.core.chunk_first.call(null,seq__6020__$1);
var G__6028 = cljs.core.chunk_rest.call(null,seq__6020__$1);
var G__6029 = c__4546__auto__;
var G__6030 = cljs.core.count.call(null,c__4546__auto__);
var G__6031 = (0);
seq__6020 = G__6028;
chunk__6021 = G__6029;
count__6022 = G__6030;
i__6023 = G__6031;
continue;
} else {
var bird = cljs.core.first.call(null,seq__6020__$1);
birds_cljs.core.draw_bird.call(null,bird);

var G__6032 = cljs.core.next.call(null,seq__6020__$1);
var G__6033 = null;
var G__6034 = (0);
var G__6035 = (0);
seq__6020 = G__6032;
chunk__6021 = G__6033;
count__6022 = G__6034;
i__6023 = G__6035;
continue;
}
} else {
return null;
}
}
break;
}
});
birds_cljs.core.draw = (function draw(state){
quil.core.background.call(null,(50),(70),(80),5.0);

return birds_cljs.core.draw_flock.call(null,new cljs.core.Keyword(null,"flock","flock",265984040).cljs$core$IFn$_invoke$arity$1(state));
});
birds_cljs.core.birds_cljs = (function birds_cljs__$1(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),birds_cljs.core.draw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),birds_cljs.core.setup,new cljs.core.Keyword(null,"size","size",1098693007),birds_cljs.core.bounds,new cljs.core.Keyword(null,"update","update",1045576396),birds_cljs.core.update_state,new cljs.core.Keyword(null,"host","host",-1558485167),"birds-cljs");
});
goog.exportSymbol('birds_cljs.core.birds_cljs', birds_cljs.core.birds_cljs);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5306__5307__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5306__5307__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),birds_cljs.core.birds_cljs,new cljs.core.Keyword(null,"host-id","host-id",742376279),"birds-cljs"], null));
}
