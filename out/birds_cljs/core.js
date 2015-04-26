// Compiled by ClojureScript 0.0-2740 {}
goog.provide('birds_cljs.core');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('birds_cljs.flock');
goog.require('birds_cljs.bird');
goog.require('quil.core');
cljs.core.enable_console_print_BANG_.call(null);
birds_cljs.core.bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(600)], null);
birds_cljs.core.grass = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(153),(255),(153)], null);
birds_cljs.core.blue = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(255)], null);
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
cljs.core.apply.call(null,quil.core.fill,birds_cljs.core.blue);

var vec__7836 = birds_cljs.bird.movement_vector.call(null,bird);
var x1 = cljs.core.nth.call(null,vec__7836,(0),null);
var y1 = cljs.core.nth.call(null,vec__7836,(1),null);
var x2 = cljs.core.nth.call(null,vec__7836,(2),null);
var y2 = cljs.core.nth.call(null,vec__7836,(3),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x1,y1);

quil.core.rotate.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird));

quil.core.no_stroke.call(null);

quil.core.ellipse.call(null,(0),(0),(25),(8));

quil.core.triangle.call(null,(0),(0),(-15),(7),(-15),(-7));

quil.core.triangle.call(null,(8),(0),(0),(20),(0),(-20));

return quil.core.pop_matrix.call(null);
});
birds_cljs.core.draw_flock = (function draw_flock(flock){
var seq__7841 = cljs.core.seq.call(null,flock);
var chunk__7842 = null;
var count__7843 = (0);
var i__7844 = (0);
while(true){
if((i__7844 < count__7843)){
var bird = cljs.core._nth.call(null,chunk__7842,i__7844);
birds_cljs.core.draw_bird.call(null,bird);

var G__7845 = seq__7841;
var G__7846 = chunk__7842;
var G__7847 = count__7843;
var G__7848 = (i__7844 + (1));
seq__7841 = G__7845;
chunk__7842 = G__7846;
count__7843 = G__7847;
i__7844 = G__7848;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7841);
if(temp__4126__auto__){
var seq__7841__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7841__$1)){
var c__4546__auto__ = cljs.core.chunk_first.call(null,seq__7841__$1);
var G__7849 = cljs.core.chunk_rest.call(null,seq__7841__$1);
var G__7850 = c__4546__auto__;
var G__7851 = cljs.core.count.call(null,c__4546__auto__);
var G__7852 = (0);
seq__7841 = G__7849;
chunk__7842 = G__7850;
count__7843 = G__7851;
i__7844 = G__7852;
continue;
} else {
var bird = cljs.core.first.call(null,seq__7841__$1);
birds_cljs.core.draw_bird.call(null,bird);

var G__7853 = cljs.core.next.call(null,seq__7841__$1);
var G__7854 = null;
var G__7855 = (0);
var G__7856 = (0);
seq__7841 = G__7853;
chunk__7842 = G__7854;
count__7843 = G__7855;
i__7844 = G__7856;
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
cljs.core.apply.call(null,quil.core.background,birds_cljs.core.grass);

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
